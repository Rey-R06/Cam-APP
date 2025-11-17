// src/firebase/chatService.js

import {
  collection,
  addDoc,
  serverTimestamp,
  onSnapshot,
  query,
  orderBy
} from "firebase/firestore";

import { db } from "./firebaseConfig";

/**
 * Enviar mensaje a Firestore
 */
export const sendMessage = async (chatType, chatId, text, userId) => {
  try {
    await addDoc(
      collection(db, `chats/${chatType}/${chatId}/messages`),
      {
        text,
        userId,
        createdAt: serverTimestamp()
      }
    );
  } catch (error) {
    console.error("Error enviando mensaje:", error);
  }
};

/**
 * Escuchar mensajes en tiempo real
 */
export const listenMessages = (chatType, chatId, callback) => {
  const q = query(
    collection(db, `chats/${chatType}/${chatId}/messages`),
    orderBy("createdAt", "asc")
  );

  return onSnapshot(q, (snapshot) => {
    const msgs = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    callback(msgs);
  });
};
