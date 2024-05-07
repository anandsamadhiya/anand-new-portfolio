<script>
    import Chat from "../../components/Chat.svelte";
   import Sidebar from "../../components/Sidebar.svelte";
   import Chatlist from "../../components/Chatlist.svelte";
   import Home from "../../components/Home.svelte";
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
