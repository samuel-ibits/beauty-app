// import bcrypt from "bcrypt";
import crypto from "crypto";
import {
  APIError,
  BadRequestError,
  STATUS_CODES,
} from "./app-errors.js";
import jwt from "jsonwebtoken";
import { configs } from "../config/index.js";
const {
  APP_SECRET,
  EXCHANGE_NAME,
  MSG_QUEUE_URL,
  FAULT_SERVICE,
  NOTIFICATION_SERVICE,
  CLIENT_SERVICE,
} = configs;
// import amqplib from "amqplib";
// import amqplib from "amqplib";

//Utility functions
export const CreateVerificationString = async () => {
  return crypto.randomBytes(20).toString("hex");
};

export const GenerateSalt = async () => {
  return await bcrypt.genSalt();
};

export const HashPassword = async (password, salt) => {
  return await bcrypt.hash(password, salt);
};

export const CheckPassword = async (password, confirmPassword) => {
  if (password === confirmPassword) {
    return password === confirmPassword;
  }
};
export const ValidatePassword = async (
  enteredPassword,
  savedPassword,
  salt
) => {
  return await bcrypt.compare(enteredPassword, savedPassword);
};

export const GenerateSignature = async (payload) => {
  return jwt.sign(payload, APP_SECRET, { expiresIn: "1d" });
};

export const ValidateSignature = async (req) => {
  const signature = req.get("Authorization");

  if (signature) {
    const payload = await jwt.verify(signature.split(" ")[1], APP_SECRET);
    req.user = payload;
    return true;
  }

  return false;
};

export const FormatData = (data) => {
  console.log("-----here_---", data);
  if (data) {
    return { data };
  } else {
    throw new Error("Data Not found!");
  }
};

//Message Broker
import amqp from 'amqplib';

export const CreateChannel = async () => {
  try {
    // const connection = await amqplib.connect(MSG_QUEUE_URL);
    // const channel = await connection.createChannel();
    // console.log(channel);
    // // await channel.assertQueue(EXCHANGE_NAME, "direct", { durable: false });
    // return channel;

    const connection = await amqp.connect('amqp://localhost');

    // Open a channel within the connection
    const channel = await connection.createChannel();
  
    // Declare an exchange
    await channel.assertExchange('example_exchange', 'direct');
  
    // Declare a queue
    await channel.assertQueue('example_queue');
  
    // Bind the queue to the exchange
    await channel.bindQueue('example_queue', 'example_exchange', '');
  
    return channel;
    console.log('hekk');
  } catch (err) {
    console.log('hekkk');
    console.error(err);
    throw err;
  }
};

export const PublishMessage = (channel, service, msg) => {
  channel.publish(EXCHANGE_NAME, service, Buffer.from(msg));
  console.log("Sent: ", msg);
};

export const SubscribeMessage = async (channel, service) => {
  await channel.assertExchange(EXCHANGE_NAME, "direct", { durable: true });
  const q = await channel.assertQueue("", { exclusive: true });
  console.log(` Waiting for messages in queue: ${q.queue}`);

  channel.bindQueue(q.queue, EXCHANGE_NAME, CLIENT_SERVICE);

  channel.consume(
    q.queue,
    (msg) => {
      if (msg.content) {
        console.log("the message is:", msg.content.toString());
        service.SubscribeEvents(msg.content.toString());
      }
      console.log("[X] received");
    },
    {
      noAck: true,
    }
  );
};
