const main_part = document.getElementById('main-section')
console.log("My name is Jim")
main_part.innerHTML =`
 <div>
                <h1 class="lg:text-7xl text-5xl text font-extrabold">It's good <br>tea time at <br>The Tea House</h1>
                <p class="my-7 text-[#777777]  lg:mr-40 lg:text-left text-center ">Tea and Botanical Solutions Supplier Give Optimum Satisfaction
                    To Your Taste Buds.</p>
                <button
                    class="lg:px-4 lg:py-2 lg:h-14 h-11 py-3 px-4 bg-linear-to-r from-orange-500 to-red-500 rounded-lg font-bold text-white mb-2">Explore
                    More <i class="fa-solid fa-arrow-right -rotate-45 text-xl"></i></button>
            </div>
            <!-- banner image part -->
            <div class="  border-gray-200 lg:mt-15">
                <img class="w-auto" src="images/banner.png" alt="">
                <!-- icon part -->
                <div class="bg-white lg:rounded-xl shadow-lg  absolute flex items-center gap-2 -mt-25 mx-30 lg:p-4 p-2">
                    <i class="fa-solid fa-star text-amber-400 text-3xl"></i>
                    <div>
                        <h1 class="text-3xl text-black font-bold">5.00</h1>
                        <p class="text-[#777777]">Trust Pilot Ratings</p>
                    </div>
                </div>
            </div>

`
const milk_card = document.getElementById('milk_card')
milk_card.innerHTML = `
<h1 class="text-[#1C1C1C] lg:text-5xl text-3xl font-extrabold  lg:px-10 text-center">Our Featured Products
            </h1>
            <p class="text-[#777777] text-center lg:px-30 my-10">There are many variations of passages of Lorem Ipsum
                available, but the majority have suffered alteration in some form,
                by injected humour, or randomised words which don't look even slightly believable.</p>
            <!-- tea card part code -->
            <div class="grid lg:grid-cols-4 lg:gap-5 grid-cols-1 gap-5 ">
                <div
                    class="px-2 py-5 bg-linear-to-r from-[#F4F4F4] to-[#F4F4F4] rounded-xl flex flex-col items-center text-center lg:mx-0 mx-15 ">
                    <img class="p-5  border-gray-300" src="images/tea-1.png" alt="">
                    <h3 class="text-2xl font-bold">Milk Tea</h3>
                    <p class="text-[#777777] ">Creamer could be replaced by fresh milk</p>
                </div>
                <div
                    class="px-2 py-5 bg-linear-to-r from-[#F4F4F4] to-[#F4F4F4] rounded-xl flex flex-col items-center text-center lg:mx-0 mx-15 mb-5">
                    <img class="p-5  border-gray-300" src="images/tea-2.png" alt="">
                    <h3 class="text-2xl font-bold">Black Tea</h3>
                    <p class="text-[#777777] ">Creamer could be replaced by fresh milk</p>
                </div>
                <div
                    class="px-2 py-5 bg-linear-to-r from-[#F4F4F4] to-[#F4F4F4] rounded-xl flex flex-col items-center text-center lg:mx-0 mx-15  mb-5">
                    <img class="p-5  border-gray-300" src="images/tea-3.png" alt="">
                    <h3 class="text-2xl font-bold">Leamon Tea</h3>
                    <p class="text-[#777777] ">Creamer could be replaced by fresh milk</p>
                </div>
                <div
                    class="px-2 py-5 bg-linear-to-r from-[#F4F4F4] to-[#F4F4F4] rounded-xl flex flex-col items-center text-center lg:mx-0 mx-15 mb-5">
                    <img class="p-5  border-gray-300" src="images/tea-4.png" alt="">
                    <h3 class="text-2xl font-bold">Green Tea</h3>
                    <p class="text-[#777777] ">Creamer could be replaced by fresh milk</p>
                </div>
            </div>
`
const great_tea = document.getElementById("great_tea")
great_tea.innerHTML =`
<div class="grid grid-cols-2  grid-rows-3 gap-3 lg:w-5/6 w-4/6 m-auto my-6">
                <div class=" bg-linear-to-r from-[#e78787] to-[#f8f1eb] rounded-2xl "></div>
                <div class="bg-[#E6A6231A] lg:row-span-2 row-span-2 rounded-2xl py-2 flex justify-center"><img
                        class=" rounded-2xl border-2 border-dashed border-gray-400 lg:h-auto h-50 mx-auto"
                        src="images/fresh-1.png" alt=""></div>
                <div class="bg-[#5776391A] lg:row-span-2 row-span-2 rounded-2xl py-2"><img
                        class=" rounded-2xl border-2 border-dashed border-gray-400  mx-auto lg:h-auto h-50 px-4"
                        src="images/fresh-2.png" alt=""></div>
                <div class=" bg-linear-to-r from-[#D9D9D9] to-[#FFFFFF] rounded-2xl "></div>
            </div>
            <div class="lg:mx-0 mx-5">
                <h1 class="text-[#080606] font-extrabold text-5xl mb-5">Great Tea, Freshly Presented</h1>
                <p class="text-[#777777] mb-3">The meaning of gong cha is chanese is to provide the best tea to emperor
                    from all possessions . It represents the
                    highest quality and self expectation. Establishing in 2006, Gong cha had been deeply appreciated by
                    its custoers because
                    of good words of mouth and unique customized service orginated from Taiwan.</p>
                <h3 class="text-[#1C1C1C] font-extrabold text-2xl mb-5">Unique Taste</h3>
                <p class="text-[#777777] mb-3">A Unique and different style from other teapots gives a luxurious and
                    minimalist impression</p>
                <h4 class="text-[#1C1C1C] font-extrabold text-2xl mb-5">Premium Quality</h4>
                <p class="text-[#777777] mb-3">Premium Quality that makes tea more elegant and more durable when you use
                    it.</p>
            </div>
`

// Client Card Part 
document.getElementById('client_card').innerHTML=`
<div class="lg:mr-50 lg:ml-5 lg:my-25 bg-img">
                <h1 class="text-[#F4F4F4] font-extrabold text-5xl lg:mr-15">Meet Our Super Clients</h1>
                <p class="text-[#F4F4F4] lg:my-6 my-4">There are many variations of passages of Lorem Ipsum available,
                    but the majority have suffered alteration in some form,
                    by injected humour, or randomised words which don't look even slightly believable.</p>
                <button class="py-3 px-6 bg-white rounded-xl font-extrabold text-[#FF0000]">Show All</button>
            </div>
            <!-- card white part -->
            <div class="relative lg:mt-0 mt-30">
                <!-- top card -->
                <div class="bg-white rounded-xl relative opacity-30 disp">
                    <div class="absolute -top-6 -left-6 border-4 border-white rounded-full"><img src="images/client.png"
                            alt=""></div>
                    <div class="p-7">
                        <p class="text-[#777777] my-5">We are providing the best and suitable home insurance services
                            for the people who are
                            interested to treatment</p>
                        <h4>Sajjad JIM</h4>
                        <p>Businessman</p>
                    </div>
                </div>
                <!--  middle card -->
                <div class="absolute bottom-25 lg:-left-30 z-10 lg:mr-20">
                    <div class="bg-white rounded-xl">
                        <div class="absolute -top-6 -left-6 border-4 border-white rounded-full"><img
                                src="images/client.png" alt="">
                        </div>
                        <div class="p-7">
                            <p class="text-[#777777] my-5">We are providing the best and suitable home insurance
                                services for the people
                                who
                                are
                                interested to treatment</p>
                            <h4 class="text-black font-bold">Sajjad JIM</h4>
                            <p>Businessman</p>
                        </div>
                    </div>
                </div>
                <!-- bottom card -->
                <div class="bg-white rounded-xl relative opacity-35 top-10">
                    <div class="absolute -top-6 -left-6 border-4 border-white rounded-full"><img src="images/client.png"
                            alt=""></div>
                    <div class="p-7">
                        <p class="text-[#777777] my-5">We are providing the best and suitable home insurance services
                            for the people who
                            are
                            interested to treatment</p>
                        <h4>Sajjad JIM</h4>
                        <p>Businessman</p>
                    </div>
                </div>

            </div>
`
// News and Event Part 
const newsAndEvent =document.getElementById('newsEvent');
newsAndEvent.innerHTML=`
            <h1 class="text-[#1C1C1C] font-extrabold flex text-5xl align-middle my-5 justify-center">News & Events</h1>
           <p class="text-[#777777] flex align-middle my-4 text-center p-5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
           <div class="grid lg:grid-cols-3 grid-cols-1 ">
               <div class="lg:p-5 lg:mx-15 mx-20 mb-5  p-5 rounded-xl border-2 border-gray-200 lg:pr-7 flex flex-col">
                   <img class=" border-gray-400 rounded-xl w-auto" src="images/news-1.png" alt="">
                   <p class="text-[#777777] font-medium my-2">Feb 05, 2027</p>
                   <h3 class="text-[#1C1C1C] font-extrabold text-2xl pr-5">Collecting 8 points for discount</h3>
                   <p class="text-[#777777] font-light py-2.5">There are many variations of passages of Lorem Ipsum available.</p>
                   <h5 class="text-[#1C1C1C] font-bold">Learn More</h5>
               </div>
               <div class="lg:p-5 lg:mx-15 mx-20 mb-5  p-5 rounded-xl border-2 border-gray-200 lg:pr-7 flex flex-col">
                   <img class=" border-gray-400 rounded-xl w-auto" src="images/news-2.png" alt="">
                   <p class="text-[#777777] font-medium my-2">Feb 05, 2027</p>
                   <h3 class="text-[#1C1C1C] font-extrabold text-2xl pr-5">Collecting 8 points for discount</h3>
                   <p class="text-[#777777] font-light py-2.5">There are many variations of passages of Lorem Ipsum available.</p>
                   <h5 class="text-[#1C1C1C] font-bold">Learn More</h5>
               </div>
               <div class="lg:p-5 lg:mx-15 mx-20 mb-5  p-5 rounded-xl border-2 border-gray-200 lg:pr-7 flex flex-col">
                   <img class=" border-gray-400 rounded-xl w-auto" src="images/news-3.png" alt="">
                   <p class="text-[#777777] font-medium my-2">Feb 05, 2027</p>
                   <h3 class="text-[#1C1C1C] font-extrabold text-2xl pr-5">Collecting 8 points for discount</h3>
                   <p class="text-[#777777] font-light py-2.5">There are many variations of passages of Lorem Ipsum available.</p>
                   <h5 class="text-[#1C1C1C] font-bold">Learn More</h5>
               </div>
           </div>
`
//Footer Section Part Code
const footerPart = document.getElementById("footer_section");
footerPart.innerHTML=`
<div class="lg:my-35 lg:mx-75">
    <div class="flex justify-between mb-5 lg:px-10">
        <div><img src="images/cup.png" alt=""></div>
        <div class="flex lg:gap-5 items-center ml-15"><h3 class="text-[#ffffffcc] lg:text-2xl text-xl lg:font-bold font-medium">Ready to get strated?</h3>
            <button class="bg-white text-black font-extrabold rounded-lg lg:px-5 lg:py-3 px-7 py-0 text-sm">Get Started</button></div>
        </div>
        <!-- footer input and details section -->
        <div class="lg:mt-20  lg:flex justify-around grid grid-cols-2 lg:my-0 my-15">
        <div class="grid gap-4  mb-5">
            <h2 class="text-white font-bold text-2xl">Quick Links</h2>
            <h4>Home</h4>
            <h4>About US</h4>
            <h4>Insurance</h4>
            <h4>Privacy Policy</h4>
        </div>
        <div class="grid gap-4 mb-5">
            <h2 class="text-white font-bold text-2xl">Our Service</h2>
            <h4>Life Insurance</h4>
            <h4>Car Insurance</h4>
            <h4>Health Insurance</h4>
            <h4>House Insurance</h4>
        </div>
        <div class="grid gap-4 mb-5">
            <h2 class="text-white font-bold text-2xl">Help</h2>
            <p>FAQs</p>
            <p>Contact Us</p>
        </div>
        <div class="grid gap-4">
            <h2 class="text-white font-bold text-2xl">Subscribe to our newsletter</h2>
            <div ><input type="email" name="" id="" required placeholder="Enter email address " class="bg-transparent border-b-4 border-black lg:pb-4 pb-2 lg:pr-10 absolute"><i class="fa-solid fa-arrow-right p-3 rounded-full bg-white relative lg:-right-50 -right-38 lg:bottom-1 bottom-3"></i></div>
            <div>
                <ul class="flex gap-5">
                    <li><a href="http://www.facebook.com" target="_blank"><i class="fa-brands fa-facebook text-white text-2xl"></i></a></li>
                    <li><a href="http://www.instagram.com" target="_blank">  <i class="fa-brands fa-square-instagram text-white text-2xl"></i></a></li>
                    <li><a href="http://youtube.com" target="_blank"><i class="fa-brands fa-youtube text-white text-2xl"></i></a></li>
                </ul>
            </div>
        </div>
        </div>

</div>
<p class="text-center mt-5">© 2025 SAJJADjim.to - All rights reserved.</p>
`;
