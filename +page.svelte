<script>
    import Sidebar from "../lib/components/Sidebar.svelte";
    import Chatlist from "../lib/components/Chatlist.svelte";
    import Chat from "../lib/components/Chat.svelte";
</script>

<div class="">
    <div class="flex">
        <div class="h-full w-1/3 md:block hidden">
            <Sidebar />
        </div>
        <Chatlist />
        <Chat />
    </div>
</div>
