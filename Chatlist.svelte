<script>
    // Import necessary dependencies
    import Sidebar from "./Sidebar.svelte";
    import { Chat } from "$lib/store.js";

    // Define data
    let showNav = false;
    let showSearchBar = false;

    // Function to toggle the navigation sidebar
    function openNav() {
        showNav = !showNav;
        if (showNav) {
            document.addEventListener("click", closeNavOnClickOutside);
        } else {
            document.removeEventListener("click", closeNavOnClickOutside);
        }
    }

    // Function to close the navigation sidebar on click outside
    function closeNavOnClickOutside(event) {
        const sidebar = document.getElementById("123");
        if (sidebar && !sidebar.contains(event.target)) {
            showNav = false;
            document.removeEventListener("click", closeNavOnClickOutside);
        }
    }

    // Function to set the chat
    function setchat(val) {
        $Chat = val;
    }

    // Function to toggle the search bar
    function toggleSearchBar() {
        showSearchBar = !showSearchBar;
    }

    // Array of chat items
    let chatItems = [
        { user: "jack", message: "thik hai bhai ok...", time: "10:39 PM" },
        { user: "David", message: "Ya bro whatsapp...", time: "Yesterday" },
        { user: "tikon", message: "ok...", time: "2 days ago" },
        { user: "jabbi", message: "nice!...", time: "3 days ago" },
        { user: "jimii", message: "ha ha ha...", time: "3 days ago" },
        { user: "nick", message: "ok...", time: "3 days ago" },
        // Add more chat items as needed
    ];
</script>

<div
    class="w-full md:max-w-md shadow-md overflow-hidden rounded-md relative border"
>
    <!-- Top Image and Icons -->
    <div
        class="py-2 px-3 bg-grey-lighter flex sm:flex-row justify-between items-center"
    >
        {#if showNav}
            <div
                class="sidebar-overlay fixed top-0 left-0 w-full h-full md:hidden z-50"
                style="backdrop-filter: blur(8px);"
                on:click={openNav}
            ></div>
        {/if}

        <!-- Sidebar Wrapper -->
        <div class="relative">
            <div
                class=" h-full sidebar-wrapper absolute top-0 left-0 md:hidden transition-all transform-gpu duration-500 ease-in-out z-50 bg-opacity-70"
                style={showNav
                    ? "transform: translateY(0) translateX(0) scale(1) ;"
                    : "transform: translateY(-100%) translateX(-100%) scale(-1); opacity: " +
                      (showNav ? "1" : "0")}
            >
                <Sidebar />
            </div>

            <div class="cursor-pointer" on:click={openNav} id="123">
                <svg
                    class="w-6 h-6 md:hidden transition-transform transform"
                    class:rotate-90={showNav}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                </svg>
            </div>
        </div>

        <div class="flex items-center gap-2">
            <div
                class=" cursor-pointer hover:scale-125"
                onclick="handleFirstIconClick()"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                >
                    <path
                        opacity=".55"
                        fill="#263238"
                        d="M19.005 3.175H4.674C3.642 3.175 3 3.789 3 4.821V21.02l3.544-3.514h12.461c1.033 0 2.064-1.06 2.064-2.093V4.821c-.001-1.032-1.032-1.646-2.064-1.646zm-4.989 9.869H7.041V11.1h6.975v1.944zm3-4H7.041V7.1h9.975v1.944z"
                    ></path>
                </svg>
            </div>
            <div
                class="ml-4 cursor-pointer hover:scale-125"
                onclick="handleSecondIconClick()"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                >
                    <path
                        fill="#263238"
                        fill-opacity=".6"
                        d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"
                    ></path>
                </svg>
            </div>
        </div>
    </div>
    <script>
        function handleFirstIconClick() {
            console.log("First icon clicked!");
            // Add your logic here
            alert("you clicked on first icon!");
        }

        function handleSecondIconClick() {
            console.log("Second icon clicked!");
            // Add your logic here
            alert("you clicked on second icon click!");
        }
    </script>

    <!-- Search -->
    <div class="absolute right-28 top-2">
        <div class="cursor-pointer" on:click={toggleSearchBar}>
            <svg
                class="w-5 h-6 text-gray-500 hover:text-gray-700 hover:scale-125"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
            </svg>
        </div>
    </div>

    <!-- Search Bar -->
    {#if showSearchBar}
        <div class="relative">
            <div
                class="absolute inset-y-0 right-0 top-0 pr-3 flex items-center pointer-events-none"
            >
                <svg
                    class="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                </svg>
            </div>
            <input
                type="text"
                class="w-full border rounded-md pl-10 pr-4 py-2 focus:outline-none focus:border-blue-500"
                placeholder="Search..."
            />
        </div>
    {/if}

    <!-- Chat Items -->
    <div class="overflow-y-auto h-full">
        {#each chatItems as { user, message, time }, i (user)}
            <div
                class="flex items-center p-4 border-b border-gray-200 cursor-pointer hover:bg-gray-300 border"
                on:click={() => setchat(user)}
            >
                <img
                    src={`https://graph.facebook.com/100006582316470/picture?width=40&height=40`}
                    alt="User"
                    class="w-10 h-10 rounded-full mr-4 cursor-pointer"
                />
                <div>
                    <div class="font-semibold">{user}</div>
                    <div class="text-gray-600">{message}</div>
                </div>
                <div class="ml-auto text-sm text-gray-500">{time}</div>
            </div>
        {/each}
    </div>
</div>
