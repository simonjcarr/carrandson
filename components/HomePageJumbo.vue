<template>
    <section>
    <div class="relative z-30">
            <div>
                 <picture>
                     <img  src="~assets/images/garden-room.jpg" class="img" alt="Garden Room in Penwortham built by Carr and Son" />
                 </picture>
                <div class="img-text-overlay">
                     <div class="text-3xl text-left md:justify-center p-2 md:p-5 text-[1.7rem] md:text-[2rem]">
                         <h1>Garden rooms for year 
                         <p>
                             round living and working
                         </p>
                         </h1>
                     </div>
                     <div class="image-sub-text hidden md:block text-2xl text-gray-200 p-2 md:p-5">
                         <h2>
                             Custom built to your specification
                         </h2>
                     </div>           
                 </div>
            </div>
        
    </div>
    </section> 
</template>

<script setup>

</script>

<style  scoped>
/* Styles to make the text layer on top of the image */
.img {
    width: 100%;
    height: 50vh;
    object-fit: cover;
    position: relative;
}

.img-text-overlay {
    background-color: rgba(0, 0, 0, 0.5);
    
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    font-size: 3rem;
    color: white;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
.img-text-overlay.img-sub-text {
    font-size: 1rem !important;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
</style>