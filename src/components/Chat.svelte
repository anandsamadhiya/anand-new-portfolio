<script>
    import { Chat } from "$lib/store.js";
    // Sample array of messages
    let messages = [
        {
            sender: "Me",
            content: "hey bro",
            time: "12:45 pm",
            color: "#030712",
        },
        {
            sender: "Tom Cruise",
            content: "Get Andrés on this movie ASAP!",
            time: "12:45 pm",
            color: "#030712",
        },
        // Add more messages as needed
    ];
    function sendMessage() {
        const messageInput = document.getElementById("messageInput");
        const messageContent = messageInput.value.trim();
        if (messageContent !== "") {
            messages = [
                ...messages,
                {
                    sender: "",
                    content: messageContent,
                    time: new Date().toLocaleTimeString(),
                    // color: "#F2F2F2",
                },
            ];

            // Clear the input field after sending the message
            messageInput.value = "";

            // Scroll to the bottom to show the latest message
            const messagesContainer = document.querySelector(".overflow-auto");
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }
        console.log(messages);
    }
    function handleKeyDown(event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    }
</script>

<div class="w-full md:w-4/3 border md:block hidden">
    <!-- Header -->

    <div
        class="py-2 px-3 bg-grey-lighter flex flex-row justify-between items-center"
    >
        <div class="flex items-center">
            <div>
                <img
                    class="w-10 h-10 rounded-full"
                    src="https://graph.facebook.com/100006582316470/picture?width=40&height=40"
                />
            </div>

            <div class="ml-4">
                <p class="text-grey-darkest">
                    {$Chat}
                </p>
                <p class="text-grey-darker text-xs mt-1">
                    <!-- Andrés, Tom, Harrison, Arnold, Sylvester -->
                </p>
            </div>
        </div>

        <div class="flex">
            <div class="ml-6 cursor-pointer hover:scale-125">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    ><path
                        fill="#263238"
                        fill-opacity=".6"
                        d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"
                    ></path></svg
                >
            </div>
        </div>
    </div>

    <!-- Messages -->
    <div
        class="flex-1 overflow-auto  h-[81vh]"
        style="background-color: #DAD3CC"
    >
        <div class="py-2 px-3">
            {#each messages as message}
                <div class="flex mb-2">
                    <div
                        class="rounded py-2 px-3 bg-[#F2F2F2]"
                        style={`background-color: ${message.color}`}
                    >
                        <p class="text-sm text-purple">{message.sender}</p>
                        <p class="text-sm mt-1">{message.content}</p>
                        <p class="text-right text-xs text-grey-dark mt-1">
                            {message.time}
                        </p>
                    </div>
                </div>
            {/each}
        </div>
    </div>

    <!-- Input -->
    <div class="bg-gray-100 px-4 py-4 flex items-center">
        <div class="cursor-pointer hover:scale-125">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                ><path
                    opacity=".45"
                    fill="#263238"
                    d="M9.153 11.603c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962zm-3.204 1.362c-.026-.307-.131 5.218 6.063 5.551 6.066-.25 6.066-5.551 6.066-5.551-6.078 1.416-12.129 0-12.129 0zm11.363 1.108s-.669 1.959-5.051 1.959c-3.505 0-5.388-1.164-5.607-1.959 0 0 5.912 1.055 10.658 0zM11.804 1.011C5.609 1.011.978 6.033.978 12.228s4.826 10.761 11.021 10.761S23.02 18.423 23.02 12.228c.001-6.195-5.021-11.217-11.216-11.217zM12 21.354c-5.273 0-9.381-3.886-9.381-9.159s3.942-9.548 9.215-9.548 9.548 4.275 9.548 9.548c-.001 5.272-4.109 9.159-9.382 9.159zm3.108-9.751c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962z"
                /></svg
            >
        </div>
        <div class="flex-1 mx-4">
            <input
                class="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                type="text"
                id="messageInput"
                placeholder="Type your message here..."
                on:keydown={handleKeyDown}
            />
        </div>
        <div>
            <button
                class="relative inline-flex items-center px-2 py-2 overflow-hidden font-medium text-black border border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50"
                on:click={sendMessage}
                style="height: 40px;"
            >
                <span
                    class="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"
                ></span>
                <span
                    class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease"
                >
                    <svg
                        class="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        ><path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path></svg
                    >
                </span>
                <span>send</span>
            </button>
        </div>
    </div>
</div>
