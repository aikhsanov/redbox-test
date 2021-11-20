<template>
        <div class="bg-white
              ">
            <label class="block font-semibold" for="time-picker">{{timePickerName}}</label>
            <div class="flex mt-2 items-center  h-14 justify-end
                focus:ring-heliotrope focus:border-heliotrope
                font-medium
                block
                w-full
                sm:text-sm
                border
                border-perfume
                rounded relative px-8">
                <div class="absolute top-1/2 transform -translate-y-1/2 right-0 pr-3 flex items-center pointer-events-none">
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.498 4.64814C14.1624 4.81049 14.022 5.21431 14.1844 5.54973C14.6279 6.46599 14.8527 7.45363 14.8527 8.48626C14.8527 12.2088 11.8241 15.2375 8.10149 15.2375C4.37891 15.2375 1.35025 12.2088 1.35025 8.48626C1.35025 4.76368 4.37891 1.73501 8.10149 1.73501C9.64409 1.73501 11.0932 2.23872 12.2927 3.19158C12.5836 3.42381 13.009 3.37519 13.2412 3.08329C13.4735 2.79154 13.4249 2.36662 13.1328 2.13472C11.7128 1.00616 9.92594 0.384766 8.10149 0.384766C3.63456 0.384766 0 4.01933 0 8.48626C0 12.9532 3.63456 16.5878 8.10149 16.5878C12.5684 16.5878 16.203 12.9532 16.203 8.48626C16.203 7.24842 15.9327 6.06217 15.3996 4.9618C15.2376 4.62556 14.8325 4.48545 14.498 4.64814Z" fill="#9B63F8"/>
                        <path d="M8.10139 3.08521C7.72872 3.08521 7.42627 3.38766 7.42627 3.76033V8.4862C7.42627 8.85887 7.72872 9.16132 8.10139 9.16132H11.477C11.8497 9.16132 12.1521 8.85887 12.1521 8.4862C12.1521 8.11353 11.8497 7.81108 11.477 7.81108H8.77652V3.76033C8.77652 3.38766 8.47406 3.08521 8.10139 3.08521Z" fill="#9B63F8"/>
                    </svg>

                </div>
                <select id="time-picker"
                        name="hours"
                        class="text-sm pr-0 text-right bg-none appearance-none outline-none border-none focus:outline-none focus:ring-transparent cursor-pointer focus:border-transparent"
                >
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                </select>
                <span class="text-sm">.</span>
                <select
                        name="minutes"
                        class="text-sm p-0 text-left appearance-none outline-none mr-4 border-none bg-none border-none focus:outline-none focus:ring-transparent cursor-pointer focus:border-transparent"
                >
                    <option value="00">00</option>
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                    <option value="32">32</option>
                    <option value="33">33</option>
                    <option value="34">34</option>
                    <option value="35">35</option>
                    <option value="36">36</option>
                    <option value="37">37</option>
                    <option value="38">38</option>
                    <option value="39">39</option>
                    <option value="40">40</option>
                    <option value="41">41</option>
                    <option value="42">42</option>
                    <option value="43">43</option>
                    <option value="44">44</option>
                    <option value="45">45</option>
                    <option value="46">46</option>
                    <option value="47">47</option>
                    <option value="48">48</option>
                    <option value="49">49</option>
                    <option value="50">50</option>
                    <option value="51">51</option>
                    <option value="52">52</option>
                    <option value="53">53</option>
                    <option value="54">54</option>
                    <option value="55">55</option>
                    <option value="56">56</option>
                    <option value="57">57</option>
                    <option value="58">58</option>
                    <option value="59">59</option>
                </select>
            </div>
        </div>
</template>

<script>
    export default {
        name: "TheTimePicker",
        props:["timePickerName"]
    }
</script>

<style scoped>

</style>