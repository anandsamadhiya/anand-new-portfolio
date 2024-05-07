


<nav class="bg-gray-950 text-white p-4 font-sans">
    <div class="container mx-auto flex justify-between items-center">
        <img class="w-16 h-12" src="images/logo.png" alt="">
        <ul class="flex space-x-4">
            <li><a href="#" class="hover:text-gray-400">Home</a></li>
            <li><a href="#" class="hover:text-gray-400">TV</a></li>
            <li><a href="#" class="hover:text-gray-400">Movies</a></li>
            <li><a href="#" class="hover:text-gray-400">Sports</a></li> 
            <li><a href="#" class="hover:text-gray-400">Premium</a></li>
        </ul>
        <div>
            <input type="text" placeholder="Search" class="border border-gray-400 px-2 py-1 rounded-md focus:outline-none focus:border-blue-500">
            <button class="bg-blue-500 text-white px-3 py-1 rounded-md">Search</button>
        </div>
    </div>
</nav>

<!-- <div class=" overflow-hidden h-1/3">
  <div class="absolute inset-y-0 left-0 z-10 flex items-center justify-center w-10 h-10 text-white bg-opacity-50" on:click={prevSlide}>
    &lt;
  </div>
  
  <div class="absolute inset-y-0 right-0 z-10 flex items-center justify-center w-10 h-10 text-white bg-opacity-50" on:click={nextSlide}>
    &gt;
  </div>
  <div class="flex transition-transform ease-in-out duration-1000" style="transform: translateX(-{currentIndex * 100}%)">
    {#each slides as slide, i}
      <img src={slide} alt="Slide {i + 1}" class="w-full" style="min-width: 100%" />
      <button class="absolute bottom-4 left-4 bg-blue-500 text-white px-4 py-2 rounded-lg" style="z-index: 20;">
        Watch Now
      </button>
      
    {/each}

  </div>    
</div> -->

<div>
    <img class="h-screen w-screen" src="images/img.jpg" alt="">
</div>
    
<div class="bg-gray-950 flex justify-between items-center">
    <h1 class="text-white py-6 mx-3 font-extrabold text-2xl">Popular Movies</h1>
    <a href="#" class="text-white px-6 font-bold text-2xl">See All</a>
</div>




<div class="flex gap-4 py-5  overflow-x-auto bg-gray-950" style="scrollbar-width: none; /* Firefox */ -ms-overflow-style: none; /* IE and Edge */">
  <style>
    .overflow-x-auto::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera */
    }
  </style>
 <div class="group relative">
    <div class="bg-cover bg-center bg-blue-800 h-48 w-48 shrink-0 border cursor-pointer  transition-all group-hover:scale-125 group-hover:duration-500 duration-500" style="background-image: url('images/img.jpg');"></div>
    <button class="border border-black mt-36 rounded-full px-2 py-2 mx-11 text-white bg-gray-900 opacity-0 group-hover:opacity-100 absolute inset-0 flex items-center justify-center transition-opacity duration-300">
         <a href=""> Watch Now</a>
    </button>
  </div>
  
  <div class="group relative">
    <div class="bg-cover bg-center bg-blue-800 h-48 w-48 shrink-0 border cursor-pointer transition-transform group-hover:scale-125 group-hover:duration-500 duration-500" style="background-image: url('images/ironman.webp');"></div>
    <button class="border border-black mt-36 rounded-full px-2 py-2 mx-11 text-white bg-gray-900 opacity-0 group-hover:opacity-100 absolute inset-0 flex items-center justify-center transition-opacity duration-300">
        Watch Now
    </button>
  </div>

  <div class="group relative">
    <div class="bg-cover bg-center bg-blue-800 h-48 w-48 shrink-0 border cursor-pointer transition-transform group-hover:scale-125 group-hover:duration-500 duration-500" style="background-image: url('images/poster 11.png')"></div>
    <button class="border border-black mt-36 rounded-full px-2 py-2 mx-11 text-white bg-gray-900 opacity-0 group-hover:opacity-100 absolute inset-0 flex items-center justify-center transition-opacity duration-300">
        Watch Now
    </button>

  </div>
  <div class="group relative">
    <div class="bg-cover bg-center bg-blue-800 h-48 w-48 shrink-0 border cursor-pointer transition-transform group-hover:scale-125 group-hover:duration-500 duration-500" style="background-image: url('images/poster 1.png');"></div>
    <button class="border border-black mt-36 rounded-full px-2 py-2 mx-11 text-white bg-gray-900 opacity-0 group-hover:opacity-100 absolute inset-0 flex items-center justify-center transition-opacity  duration-300">
        Watch Now
    </button>
  </div>

  <div class="group relative">
    <div class="bg-cover bg-center bg-blue-800 h-48 w-48 shrink-0 border cursor-pointer transition-transform group-hover:scale-125 group-hover:duration-500 duration-500" style="background-image: url('images/poster 2.png');"></div>
    <button class="border border-black mt-36 rounded-full px-2 py-2 mx-11 text-white bg-gray-900 opacity-0 group-hover:opacity-100 absolute inset-0 flex items-center justify-center transition-opacity duration-300">
        Watch Now
    </button>
  </div>

<div class="group relative">
    <div class="bg-cover bg-center bg-blue-800 h-48 w-48 shrink-0 border cursor-pointer transition-transform group-hover:scale-125 group-hover:duration-500 duration-500" style="background-image: url('images/poster 3.png');"></div>
    <button class="border border-black mt-36 rounded-full px-2 py-2 mx-11 text-white bg-gray-900 opacity-0 group-hover:opacity-100 absolute inset-0 flex items-center justify-center transition-opacity duration-300">
        Watch Now
    </button>
  </div>

  <div class="group relative">
    <div class="bg-cover bg-center bg-blue-800 h-48 w-48 shrink-0 border cursor-pointer transition-transform group-hover:scale-125 group-hover:duration-500 duration-500" style="background-image: url('images/poster 4.png');"></div>
    <button class="border border-black mt-36 rounded-full px-2 py-2 mx-11 text-white bg-gray-900 opacity-0 group-hover:opacity-100 absolute inset-0 flex items-center justify-center transition-opacity duration-300">
        Watch Now
    </button>
  </div>

  <div class="group relative">
    <div class="bg-cover bg-center bg-blue-800 h-48 w-48 shrink-0 border cursor-pointer transition-transform group-hover:scale-125 group-hover:duration-500 duration-500" style="background-image: url('images/poster 5.png');"></div>
    <button class="border border-black mt-36 rounded-full px-2 py-2 mx-11 text-white bg-gray-900 opacity-0 group-hover:opacity-100 absolute inset-0 flex items-center justify-center transition-opacity duration-300">
        Watch Now
    </button>
  </div>

  <div class="group relative">
    <div class="bg-cover bg-center bg-blue-800 h-48 w-48 shrink-0 border cursor-pointer transition-transform group-hover:scale-125 group-hover:duration-500 duration-500" style="background-image: url('images/poster 6.png');"></div>
    <button class="border border-black mt-36 rounded-full px-2 py-2 mx-11 text-white bg-gray-900 opacity-0 group-hover:opacity-100 absolute inset-0 flex items-center justify-center transition-opacity duration-300">
        Watch Now
    </button>
  </div>

  <div class="group relative">
    <div class="bg-cover bg-center bg-blue-800 h-48 w-48 shrink-0 border cursor-pointer transition-transform group-hover:scale-125 group-hover:duration-500 duration-500" style="background-image: url('images/poster 7.png');"></div>
    <button class="border border-black mt-36 rounded-full px-2 py-2 mx-11 text-white bg-gray-900 opacity-0 group-hover:opacity-100 absolute inset-0 flex items-center justify-center transition-opacity duration-300">
        Watch Now
    </button>
  </div>

  <div class="group relative">
    <div class="bg-cover bg-center bg-blue-800 h-48 w-48 shrink-0 border cursor-pointer transition-transform group-hover:scale-125 group-hover:duration-500 duration-500" style="background-image: url('images/poster 10.png');"></div>
    <button class="border border-black mt-36 rounded-full px-2 py-2 mx-11 text-white bg-gray-900 opacity-0 group-hover:opacity-100 absolute inset-0 flex items-center justify-center transition-opacity duration-300">
        Watch Now
    </button>
  </div>
  
 
  <!-- Add image URLs accordingly to each style attribute -->
  <!-- Ensure image dimensions are appropriate to maintain card size -->
</div>


<div class="bg-gray-950 flex justify-between items-center">
    <h1 class="text-white py-6 mx-3 font-extrabold text-2xl">Popular Showes</h1>
    <a href="#" class="text-white px-6 font-bold text-2xl">See All</a>
</div>

<!--  cards slider 2 -->

<div class="flex gap-4 py-5  overflow-x-auto bg-gray-950" style="scrollbar-width: none; /* Firefox */ -ms-overflow-style: none; /* IE and Edge */">
    <style>
      .overflow-x-auto::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera */
      }
    </style>
   <div class="group relative">
      <div class="bg-cover bg-center bg-blue-800 h-48 w-48 shrink-0 border cursor-pointer  transition-all group-hover:scale-125 group-hover:duration-500 duration-500" style="background-image: url('images/img.jpg');"></div>
      <button class="border border-black mt-36 rounded-full px-2 py-2 mx-11 text-white bg-gray-900 opacity-0 group-hover:opacity-100 absolute inset-0 flex items-center justify-center transition-opacity duration-300">
           <a href=""> Watch Now</a>
      </button>
    </div>
    
    <div class="group relative">
      <div class="bg-cover bg-center bg-blue-800 h-48 w-48 shrink-0 border cursor-pointer transition-transform group-hover:scale-125 group-hover:duration-500 duration-500" style="background-image: url('images/ironman.webp');"></div>
      <button class="border border-black mt-36 rounded-full px-2 py-2 mx-11 text-white bg-gray-900 opacity-0 group-hover:opacity-100 absolute inset-0 flex items-center justify-center transition-opacity duration-300">
          Watch Now
      </button>
    </div>
  
    <div class="group relative">
      <div class="bg-cover bg-center bg-blue-800 h-48 w-48 shrink-0 border cursor-pointer transition-transform group-hover:scale-125 group-hover:duration-500 duration-500" style="background-image: url('images/poster 11.png')"></div>
      <button class="border border-black mt-36 rounded-full px-2 py-2 mx-11 text-white bg-gray-900 opacity-0 group-hover:opacity-100 absolute inset-0 flex items-center justify-center transition-opacity duration-300">
          Watch Now
      </button>
  
    </div>
    <div class="group relative">
      <div class="bg-cover bg-center bg-blue-800 h-48 w-48 shrink-0 border cursor-pointer transition-transform group-hover:scale-125 group-hover:duration-500 duration-500" style="background-image: url('images/poster 1.png');"></div>
      <button class="border border-black mt-36 rounded-full px-2 py-2 mx-11 text-white bg-gray-900 opacity-0 group-hover:opacity-100 absolute inset-0 flex items-center justify-center transition-opacity  duration-300">
          Watch Now
      </button>
    </div>
  
    <div class="group relative">
      <div class="bg-cover bg-center bg-blue-800 h-48 w-48 shrink-0 border cursor-pointer transition-transform group-hover:scale-125 group-hover:duration-500 duration-500" style="background-image: url('images/poster 2.png');"></div>
      <button class="border border-black mt-36 rounded-full px-2 py-2 mx-11 text-white bg-gray-900 opacity-0 group-hover:opacity-100 absolute inset-0 flex items-center justify-center transition-opacity duration-300">
          Watch Now
      </button>
    </div>
  
  <div class="group relative">
      <div class="bg-cover bg-center bg-blue-800 h-48 w-48 shrink-0 border cursor-pointer transition-transform group-hover:scale-125 group-hover:duration-500 duration-500" style="background-image: url('images/poster 3.png');"></div>
      <button class="border border-black mt-36 rounded-full px-2 py-2 mx-11 text-white bg-gray-900 opacity-0 group-hover:opacity-100 absolute inset-0 flex items-center justify-center transition-opacity duration-300">
          Watch Now
      </button>
    </div>
  
    <div class="group relative">
      <div class="bg-cover bg-center bg-blue-800 h-48 w-48 shrink-0 border cursor-pointer transition-transform group-hover:scale-125 group-hover:duration-500 duration-500" style="background-image: url('images/poster 4.png');"></div>
      <button class="border border-black mt-36 rounded-full px-2 py-2 mx-11 text-white bg-gray-900 opacity-0 group-hover:opacity-100 absolute inset-0 flex items-center justify-center transition-opacity duration-300">
          Watch Now
      </button>
    </div>
  
    <div class="group relative">
      <div class="bg-cover bg-center bg-blue-800 h-48 w-48 shrink-0 border cursor-pointer transition-transform group-hover:scale-125 group-hover:duration-500 duration-500" style="background-image: url('images/poster 5.png');"></div>
      <button class="border border-black mt-36 rounded-full px-2 py-2 mx-11 text-white bg-gray-900 opacity-0 group-hover:opacity-100 absolute inset-0 flex items-center justify-center transition-opacity duration-300">
          Watch Now
      </button>
    </div>
  
    <div class="group relative">
      <div class="bg-cover bg-center bg-blue-800 h-48 w-48 shrink-0 border cursor-pointer transition-transform group-hover:scale-125 group-hover:duration-500 duration-500" style="background-image: url('images/poster 6.png');"></div>
      <button class="border border-black mt-36 rounded-full px-2 py-2 mx-11 text-white bg-gray-900 opacity-0 group-hover:opacity-100 absolute inset-0 flex items-center justify-center transition-opacity duration-300">
          Watch Now
      </button>
    </div>
  
    <div class="group relative">
      <div class="bg-cover bg-center bg-blue-800 h-48 w-48 shrink-0 border cursor-pointer transition-transform group-hover:scale-125 group-hover:duration-500 duration-500" style="background-image: url('images/poster 7.png');"></div>
      <button class="border border-black mt-36 rounded-full px-2 py-2 mx-11 text-white bg-gray-900 opacity-0 group-hover:opacity-100 absolute inset-0 flex items-center justify-center transition-opacity duration-300">
          Watch Now
      </button>
    </div>
  
    <div class="group relative">
      <div class="bg-cover bg-center bg-blue-800 h-48 w-48 shrink-0 border cursor-pointer transition-transform group-hover:scale-125 group-hover:duration-500 duration-500" style="background-image: url('images/poster 10.png');"></div>
      <button class="border border-black mt-36 rounded-full px-2 py-2 mx-11 text-white bg-gray-900 opacity-0 group-hover:opacity-100 absolute inset-0 flex items-center justify-center transition-opacity duration-300">
          Watch Now
      </button>
    </div>
    
   
    <!-- Add image URLs accordingly to each style attribute -->
    <!-- Ensure image dimensions are appropriate to maintain card size -->
  </div>
  

   




          

<!-- Animated card -->
<div class="flex min-h-screen items-center justify-center bg-gray-950 ">
    <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        <div
            class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30"
        >
            <div class="h-96 w-72">
                <img
                    class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125 shrink-0"
                    src="images/ironman.webp"
                    alt=""
                />
            </div>  
            <div
                class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"
            ></div>
            <div
                class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0"
            >
                <h1 class="font-dmserif text-3xl font-bold text-white">
                    ironman  
                </h1>
                <p 
                    class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facilis dolore adipisci placeat.
                </p>
                <button
                    class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"
                    >See More</button
                >
            </div>
        </div>
        
        <div
            class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30"
        >
            <div class="h-96 w-72">
                <img
                    class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125 shrink-0"
                    src="images/pp.jpg"
                    alt=""
                    
                />
            </div>
            <div
                class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"
            ></div>
            <div
                class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0"
            >
                <h1 class="font-dmserif text-3xl font-bold text-white">
                    Spiderman
                </h1>
                <p
                    class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facilis dolore adipisci placeat.
                </p>
                <button
                    class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"
                    >See More</button>
            </div>
        </div>   
        <div
            class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30"
        >
            <div class="h-96 w-72">
                <img
                    class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125 shrink-0"
                    src="images/img.jpg"
                    alt=""
                />
            </div>
            <div
                class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"
            ></div>
            <div
                class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0"
            >
                <h1 class="font-dmserif text-3xl font-bold text-white">
                    Supernatural    
                </h1>
                <p
                    class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facilis dolore adipisci placeat.
                </p>
                <button
                    class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"
                    >See More</button
                >
            </div>   
        </div>

      </div>
   
</div>










