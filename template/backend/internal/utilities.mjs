/**
 * Copyright (c) 2020 Nadav Tasher
 * https://github.com/NadavTasher/Template/
 **/

// Import modules
import Crypto from "crypto";

/**
 * This class contains utility functions.
 */
export default class Utilities {

    /**
     * Generates random strings.
     * @param length Length
     * @param charset Charset
     * @return {string} Random string
     */
    static random(length = 0, charset = "abcdefghijklmnopqrstuvwxyz0123456789") {
        // Make sure the requested length is longer then 0
        if (length === 0)
            return "";

        // Return a random charset character and recurse
        return charset[Math.floor(Math.random() * charset.length)] + this.random(length - 1, charset);
    }

    /**
     * Hashes a given message.
     * @param message Message
     * @param output Output encoding
     * @return {string} Hash
     */
    static hash(message, output = "hex") {
        return Crypto.createHash("sha256").update(message).digest(output);
    }

    /**
     * HMACs a given message.
     * @param message Message
     * @param password Password (Secret)
     * @param output Output encoding
     * @return {string} HMAC
     */
    static hmac(message, password, output = "hex") {
        return Crypto.createHmac("sha256", password).update(message).digest(output);
    }
}