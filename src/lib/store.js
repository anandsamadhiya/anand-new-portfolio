import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export const Chat = writable(browser ? JSON.parse(localStorage.getItem("Chat") || JSON.stringify('')) : '');
Chat.subscribe((val) => browser && (localStorage.Chat = JSON.stringify(val)));

