<script>
    export let y; // Assuming y is a prop passed to this component

    export let tabs = [
        { name: "Projects", link: "#projects" },
        { name: "About me", link: "#about" },
    ];
</script>

<header
    class="sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border-b border-solid"
    class:bg-slate-950={y > 0}
    class:border-violet-950={y > 0}
    class:py-4={y > 0}
    class:bg-transparent={y <= 0}
    class:border-transparent={y <= 0}
    class:py-6={y <= 0}
>
    <h1 class="font-medium">
        <b class="font-bold poppins">My</b> <span class="">Website</span>
    </h1>
    <div class="sm:flex items-center gap-4 flex">
        {#each tabs as tab, index}
            <a
                href={tab.link}
                class="duration-200 hover:text-violet-400"
                target={index === 2 ? "_blank" : ""}
            >
                <p>{tab.name}</p>
            </a>
        {/each}

        <a href="#skills" class="duration-200 hover:text-violet-400">
            <p>Skills</p>
        </a>
    </div>
</header>
