<template>
    <div class="wrapper-no4">
        <button class="button-bird"
                @click="$emit('login-pressed')">
            <p class="button-bird__text">LOGIN</p>
            <svg version="1.1" class="feather" xmlns="http://www.w3.org/2000/svg"
                 xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                 viewBox="0 0 75 38" style="enable-background:new 0 0 75 38;" xml:space="preserve">
        <g>
            <path d="M20.8,31.6c3.1-0.7,2.9-2.3,2,1c9.1,4.4,20.4,3.7,29.1-0.8l0,0c0.7-2.1,1-3.9,1-3.9c0.6,0.8,0.8,1.7,1,2.9
                c4.1-2.3,7.6-5.3,10.2-8.3c0.4-2.2,0.4-4,0.4-4.1c0.6,0.4,0.9,1.2,1.2,2.1c4.5-6.1,5.4-11.2,3.7-13.5c1.1-2.6,1.6-5.4,1.2-7.7
                c-0.5,2.4-1.2,4.7-2.1,7.1c-5.8,11.5-16.9,21.9-30.3,25.3c13-4,23.6-14.4,29.1-25.6C62.8,9,55.6,16.5,44.7,20.7
                c2.1,0.7,3.5,1.1,3.5,1.6c-0.1,0.4-1.3,0.6-3.2,0.4c-7-0.9-7.1,1.2-16,1.5c1,1.3,2,2.5,3.1,3.6c-1.9-0.9-3.8-2.2-5.6-3.6
                c-0.9,0.1-10.3,4.9-22.6-12.3C5.9,17.7,11.8,26.9,20.8,31.6z"/>
        </g>
        </svg>
            <span class="bird"></span>
            <span class="bird--1"></span>
            <span class="bird--2"></span>
            <span class="bird--3"></span>
            <span class="bird--4"></span>
            <span class="bird--5"></span>
            <span class="bird--6"></span>
            <span class="bird--7"></span>
            <span class="bird--8"></span>
            <span class="bird--9"></span>
            <span class="bird--10"></span>
            <span class="bird--11"></span>
            <span class="bird--12"></span>
            <span class="bird--13"></span>
            <span class="bird--14"></span>
            <span class="bird--15"></span>
            <span class="bird--16"></span>
            <span class="bird--17"></span>
            <span class="bird--18"></span>
            <span class="bird--19"></span>
            <span class="bird--20"></span>
            <span class="bird--21"></span>
            <span class="bird--22"></span>
            <span class="bird--23"></span>
            <span class="bird--24"></span>
            <span class="bird--25"></span>
            <span class="bird--26"></span>
            <span class="bird--27"></span>
            <span class="bird--28"></span>
            <span class="bird--29"></span>
            <span class="bird--30"></span>
        </button>
    </div>
</template>

<script>
    export default {
        name: "BirdButton"
    }

</script>

<style lang="scss" scoped>
    $sizeh4: 25px;
    $sizew4: 59px;
    $sizew4fore: 118px;
    $color4: #131335;
    $color4Blue: #BEEDFF;
    $widthBird2: 60px;
    $widthBird1: 30px;
    $heightBird2: 33px;

    .wrapper-no4 {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: transparent;
        height: 100%;
        width: 100%;

        .button-bird {
            width: 300px;
            height: 88px;
            background-color: $color4;
            border-radius: 5px;
            position: relative;
            opacity: 1;
            transform: translateY(10%);
            padding: 0;
            border: none;
            display: flex;
            justify-content: center;

            &__text {
                text-align: center;
                font-size: 20px;
                font-family: Helvetica, Arial, sans-serif;
                color: $color4Blue;
                position: absolute;
                z-index: 1000;
                top: 50%;
                margin: 0;
                transform: translateY(-50%);
            }

            &:focus {
                outline: none;
            }

            &:hover {
                cursor: pointer;

                .bird--30 {
                    left: 600px;
                    top: -550px;
                    opacity: 0;
                    transition: left 1.5s cubic-bezier(0.42, 0, 0.58, 1), top 1.5s cubic-bezier(0.42, 0, 0.58, 1), opacity 0.5s linear 1s;
                }

                .bird--30:after {
                    left: 50px;
                    top: 50px;
                    transition: all 1.5s cubic-bezier(0.42, 0, 0.58, 1) -0.5s;
                }

                .bird--30:before {
                    left: -50px;
                    top: 50px;
                    transition: all 1.5s cubic-bezier(0.42, 0, 0.58, 1) -0.5s;
                }
            }

            .feather {
                position: absolute;
                width: 18%;
                left: 40%;
                top: 12px;
                display: none;
                opacity: 0;
                fill: $color4;
            }
        }

        .button-bird.active {
            background-color: transparent;
            transition: all 0.2s linear 0.1s;

            .button-bird__text {
                color: $color4;
                animation: text-fade 1.5s 0.2s;
            }

            .feather {
                display: block;
                animation: feather-fade 1.5s linear 0.5s forwards;
            }

            .bird--20,
            .bird--19,
            .bird--18,
            .bird--21,
            .bird--23,
            .bird--25,
            .bird--30 {
                left: 600px;
                top: -550px;
                opacity: 0;
                transition: left 2s cubic-bezier(0.42, 0, 0.58, 1), top 2s cubic-bezier(0.42, 0, 0.58, 1), opacity 0.5s linear 1.5s;
            }

            .bird--5,
            .bird--17,
            .bird--16,
            .bird--15,
            .bird--22 {
                left: 600px;
                top: -600px;
                opacity: 0;
                transition: left 2s cubic-bezier(0.42, 0, 0.58, 1) 0.1s, top 2s cubic-bezier(0.42, 0, 0.58, 1) 0.1s, opacity 0.5s linear 1.6s;
            }

            .bird--14,
            .bird--13,
            .bird--12,
            .bird--24,
            .bird--1 {
                left: 650px;
                top: -650px;
                opacity: 0;
                transition: left 2s cubic-bezier(0.42, 0, 0.58, 1) 0.15s, top 2s cubic-bezier(0.42, 0, 0.58, 1) 0.15s, opacity 0.5s linear 1.65s;
            }

            .bird--11,
            .bird--10,
            .bird--9,
            .bird--26,
            .bird--27 {
                left: 650px;
                top: -700px;
                opacity: 0;
                transition: left 2s cubic-bezier(0.42, 0, 0.58, 1) 0.2s, top 2s cubic-bezier(0.42, 0, 0.58, 1) 0.2s, opacity 0.5s linear 1.7s;
            }

            .bird--8,
            .bird--7,
            .bird--6,
            .bird--28 {
                left: 700px;
                top: -750px;
                opacity: 0;
                transition: left 2s cubic-bezier(0.42, 0, 0.58, 1) 0.25s, top 2s cubic-bezier(0.42, 0, 0.58, 1) 0.25s, opacity 0.5s linear 1.75s;
            }

            .bird,
            .bird--4,
            .bird--29,
            .bird--3 {
                left: 750px;
                top: -800px;
                opacity: 0;
                transition: left 2s cubic-bezier(0.42, 0, 0.58, 1) 0.3s, top 2s cubic-bezier(0.42, 0, 0.58, 1) 0.3s, opacity 0.5s linear 1.8s;
            }

            .bird--2 {
                left: 850px;
                top: -850px;
                opacity: 0;
                transition: left 1.5s cubic-bezier(0.42, 0, 0.58, 1) 0.35s, top 1.5s cubic-bezier(0.42, 0, 0.58, 1) 0.35s, opacity 0.5s linear 1.8s;
            }

            .bird--5:after,
            .bird--4:after,
            .bird--8:after,
            .bird--14:before,
            .bird--16:after,
            .bird--17:before,
            .bird--21:after,
            .bird--30:after,
            .bird--30:before {
                left: 50px;
                top: -100px;
                transition: all 1s cubic-bezier(0.42, 0, 0.58, 1) -0.3s;
            }

            .bird--4:before,
            .bird--7:before,
            .bird--9:after,
            .bird--12:before,
            .bird--13:before,
            .bird--18:after,
            .bird--27:after,
            .bird--26:before {
                left: -50px;
                top: 0px;
                transition: all ss cubic-bezier(0.42, 0, 0.58, 1) -0.5s;
            }

            .bird:before,
            .bird--2:after,
            .bird--1:after,
            .bird--7:after,
            .bird--8:before,
            .bird--15:after,
            .bird--19:before,
            .bird--22:after,
            .bird--28:after,
            .bird--28:before,
            .bird--3:after {
                left: 100px;
                top: -100px;
                transition: all 1s cubic-bezier(0.42, 0, 0.58, 1) 0s;
            }

            .bird--2:before,
            .bird--1:before,
            .bird--9:before,
            .bird--12:after,
            .bird--13:after,
            .bird--17:after,
            .bird--19:before,
            .bird--23:after,
            .bird--23:before {
                left: 50px;
                top: -10px;
                transition: all 2s cubic-bezier(0.42, 0, 0.58, 1) -0.5s;
            }

            .bird:after,
            .bird--6:before,
            .bird--10:after,
            .bird--11:after,
            .bird--16:before,
            .bird--18:before,
            .bird--20:before,
            .bird--24:before,
            .bird--26:after,
            .bird--27:before {
                left: 50px;
                top: 50px;
                transition: all 2s cubic-bezier(0.42, 0, 0.58, 1) -0.5s;
            }

            .bird--3:before,
            .bird--6:after,
            .bird--10:before,
            .bird--11:before,
            .bird--14:after,
            .bird--15:before,
            .bird--20:after,
            .bird--22:before,
            .bird--24:after,
            .bird--25:after,
            .bird--25:before,
            .bird--5:before {
                left: 100px;
                top: -10px;
                transition: all 2s cubic-bezier(0.42, 0, 0.58, 1) -0.5s;
            }

        }

        //size of two birds
        .bird,
        .bird:before,
        .bird:after,
        .bird--1,
        .bird--1:after,
        .bird--1:before,
        .bird--2,
        .bird--2:after,
        .bird--2:before,
        .bird--3,
        .bird--3:after,
        .bird--3:before,
        .bird--4,
        .bird--4:after,
        .bird--4:before,
        .bird--5,
        .bird--5:after,
        .bird--5:before,
        .bird--6,
        .bird--6:after,
        .bird--6:before,
        .bird--7,
        .bird--7:after,
        .bird--7:before,
        .bird--8,
        .bird--8:after,
        .bird--8:before,
        .bird--9,
        .bird--9:after,
        .bird--9:before,
        .bird--10,
        .bird--10:after,
        .bird--10:before,
        .bird--11,
        .bird--11:after,
        .bird--11:before,
        .bird--12,
        .bird--12:after,
        .bird--12:before,
        .bird--13,
        .bird--13:after,
        .bird--13:before,
        .bird--14,
        .bird--14:after,
        .bird--14:before,
        .bird--15,
        .bird--15:after,
        .bird--15:before,
        .bird--16,
        .bird--16:after,
        .bird--16:before,
        .bird--17,
        .bird--17:after,
        .bird--17:before,
        .bird--18,
        .bird--18:after,
        .bird--18:before,
        .bird--19,
        .bird--19:after,
        .bird--19:before,
        .bird--20,
        .bird--20:after,
        .bird--20:before,
        .bird--21,
        .bird--21:after,
        .bird--21:before,
        .bird--22,
        .bird--22:after,
        .bird--22:before,
        .bird--23,
        .bird--23:after,
        .bird--23:before,
        .bird--24,
        .bird--24:after,
        .bird--24:before,
        .bird--25,
        .bird--25:after,
        .bird--25:before,
        .bird--26,
        .bird--26:after,
        .bird--26:before,
        .bird--27,
        .bird--27:after,
        .bird--27:before,
        .bird--28,
        .bird--28:after,
        .bird--28:before,
        .bird--29,
        .bird--29:after,
        .bird--29:before,
        .bird--30,
        .bird--30:after,
        .bird--30:before {
            opacity: 1;
            display: block;
            position: absolute;
            background-image: url('http://cfriedri.ch/codepen/04/birds.svg');
            background-size: auto 100%;
            width: $widthBird2;
            height: $heightBird2;
            top: 0;
            left: 0;
            animation-name: fly-cycle;
            animation-timing-function: steps(3);
            animation-iteration-count: infinite;
        }

        //size of one bird
        .bird--1:after,
        .bird--1:before,
        .bird--2:after,
        .bird--2:before,
        .bird--4:after,
        .bird--4:before,
        .bird--5:after,
        .bird--5:before,
        .bird--7:after,
        .bird--7:before,
        .bird--8:after,
        .bird--8:before,
        .bird--10:after,
        .bird--10:before,
        .bird--11:after,
        .bird--11:before,
        .bird--13:after,
        .bird--13:before,
        .bird--14:after,
        .bird--14:before,
        .bird--16:after,
        .bird--16:before,
        .bird--17:after,
        .bird--17:before,
        .bird--18,
        .bird--18:after,
        .bird--18:before,
        .bird--19,
        .bird--19:after,
        .bird--19:before,
        .bird--20:after,
        .bird--20:before,
        .bird--21,
        .bird--21:after,
        .bird--21:before,
        .bird--22,
        .bird--22:after,
        .bird--22:before,
        .bird--23,
        .bird--23:after,
        .bird--23:before,
        .bird--24,
        .bird--24:after,
        .bird--24:before,
        .bird--25,
        .bird--25:after,
        .bird--25:before,
        .bird--26,
        .bird--26:after,
        .bird--26:before,
        .bird--27,
        .bird--27:after,
        .bird--27:before,
        .bird--28,
        .bird--28:after,
        .bird--28:before,
        .bird--29,
        .bird--29:after,
        .bird--29:before,
        .bird--30,
        .bird--30:after,
        .bird--30:before {
            width: $widthBird1;
            height: $heightBird2;
            top: -8px;
            left: 8px;
            z-index: -100;
        }

        .bird--21,
        .bird--22,
        .bird--23,
        .bird--24,
        .bird--25,
        .bird--26,
        .bird--27,
        .bird--28,
        .bird--29 {
            top: 0;
        }

        .bird--22,
        .bird--25,
        .bird--28 {
            top: $sizeh4;
        }

        .bird--23,
        .bird--26,
        .bird--29 {
            top: 2 * $sizeh4 - 5px;
        }

        .bird--24,
        .bird--25,
        .bird--26 {
            left: $sizew4fore + 15px;
        }

        .bird--27,
        .bird--28,
        .bird--29 {
            left: 2 * $sizew4fore + 20px;
        }

        .bird--18 {
            top: 0;
            left: 0;
        }

        .bird--18:after,
        .bird--18:before {
            left: -20px;
        }

        .bird--19:after,
        .bird--19:before {
            left: -10px;
        }

        .bird--1:before,
        .bird--4:before,
        .bird--7:before,
        .bird--10:before,
        .bird--13:before,
        .bird--16:before,
        .bird--19:before {
            top: 18px;
        }

        .bird--2:after,
        .bird--5:after,
        .bird--8:after,
        .bird--11:after,
        .bird--14:after,
        .bird--17:after,
        .bird--20:after {
            top: -18px;
            left: 12px
        }

        .bird--20:after,
        .bird--20:before,
        .bird--21:after {
            left: 27px
        }

        .bird--2:before,
        .bird--5:before,
        .bird--8:before,
        .bird--11:before,
        .bird--14:before,
        .bird--17:before,
        .bird--20:before {
            top: -36px;
            left: 12px
        }

        .bird--21:before,
        .bird--22:before,
        .bird--23:before,
        .bird--24:before,
        .bird--25:before,
        .bird--26:before {
            top: 10px;
            left: 45px;
        }

        .bird--21:after,
        .bird--22:after,
        .bird--23:after,
        .bird--24:after,
        .bird--25:after,
        .bird--26:after,
        .bird--27:after,
        .bird--28:after,
        .bird--29:after {
            left: 10px;
            top: 4px;
        }

        .bird--27:before,
        .bird--28:before,
        .bird--29:before {
            left: -45px;
            top: 10px;
        }

        .bird:before,
        .bird:after,
        .bird--1:after,
        .bird--1:before,
        .bird--2:before,
        .bird--2:after,
        .bird--3:after,
        .bird--3:before,
        .bird--4:after,
        .bird--4:before,
        .bird--5:after,
        .bird--5:before,
        .bird--6:after,
        .bird--6:before,
        .bird--7:after,
        .bird--7:before,
        .bird--8:after,
        .bird--8:before,
        .bird--9:after,
        .bird--9:before,
        .bird--10:after,
        .bird--10:before,
        .bird--11:after,
        .bird--11:before,
        .bird--12:after,
        .bird--12:before,
        .bird--13:after,
        .bird--13:before,
        .bird--14:after,
        .bird--14:before,
        .bird--15:after,
        .bird--15:before,
        .bird--16:after,
        .bird--16:before,
        .bird--17:after,
        .bird--17:before,
        .bird--18:after,
        .bird--18:before,
        .bird--19:after,
        .bird--19:before,
        .bird--20:after,
        .bird--20:before,
        .bird--21:after,
        .bird--21:before,
        .bird--22:after,
        .bird--22:before,
        .bird--23:after,
        .bird--23:before,
        .bird--24:after,
        .bird--24:before,
        .bird--25:after,
        .bird--25:before,
        .bird--26:after,
        .bird--26:before,
        .bird--27:after,
        .bird--27:before,
        .bird--28:after,
        .bird--28:before,
        .bird--29:after,
        .bird--29:before,
        .bird--30:after,
        .bird--30:before {
            content: '';
        }

        .bird:before,
        .bird--3:before,
        .bird--12:before,
        .bird--15:before,
        .bird--6:before,
        .bird--9:before,
        .bird--18:before {
            top: 10px;
        }

        .bird:after,
        .bird--6:after,
        .bird--12:after,
        .bird--15:after,
        .bird--9:after,
        .bird--18:after {
            top: $sizeh4 + 10px;
        }

        .bird--3:after {
            left: -10px;
        }

        .bird--3:after {
            top: $sizeh4 + 15px;
        }

        .bird--1,
        .bird--4,
        .bird--7,
        .bird--10,
        .bird--13,
        .bird--16,
        .bird--19 {
            top: $sizeh4;
        }

        .bird--2 {
            top: 2 * $sizeh4 - 5px;
        }

        .bird--5 {
            top: 2 * $sizeh4 - 3px;
            left: 25px;
        }

        .bird--8,
        .bird--11,
        .bird--14,
        .bird--17,
        .bird--20 {
            top: 2 * $sizeh4;
        }

        .bird--3,
        .bird--4 {
            left: $sizew4;
        }

        .bird--6,
        .bird--7,
        .bird--8 {
            left: 2 * $sizew4;
        }

        .bird--9,
        .bird--10,
        .bird--11 {
            left: 3 * $sizew4;
        }

        .bird--12,
        .bird--13,
        .bird--14 {
            left: 4 * $sizew4;
        }

        .bird--15,
        .bird--16,
        .bird--17 {
            left: 3.5 * $sizew4;
        }

        .bird--20 {
            left: 2 * $sizew4 - 10px;
        }

        .bird--18,
        .bird--19 {
            left: 2.5 * $sizew4 - 10px;
        }

        .bird--30,
        .bird--30:after,
        .bird--30:before {
            left: 2 * $sizew4;
            top: 0;
        }

        .bird--30:before {
            top: $sizeh4;
        }

        .bird--30:after {
            top: 20px;
        }

        .active,
        .button-bird:hover {
            .bird,
            .bird:before,
            .bird--3,
            .bird--4,
            .bird--4:after,
            .bird--4:before,
            .bird--9,
            .bird--9:after,
            .bird--13,
            .bird--13:after,
            .bird--13:before,
            .bird--15,
            .bird--16,
            .bird--18,
            .bird--21,
            .bird--21:after,
            .bird--27:before,
            .bird--24,
            .bird--24:after,
            .bird--24:before,
            .bird--27,
            .bird--27:after,
            .bird--27:before,
            .bird--30:before {
                animation-duration: 0.5s;
                animation-delay: -0.5s;
            }

            .bird--1,
            .bird--1:after,
            .bird--3:before,
            .bird--5,
            .bird--5:after,
            .bird--5:before,
            .bird--7,
            .bird--7:after,
            .bird--7:before,
            .bird--9:before,
            .bird--10,
            .bird--10:after,
            .bird--10:before,
            .bird--14,
            .bird--14:after,
            .bird--14:before,
            .bird--17,
            .bird--17:after,
            .bird--17:before,
            .bird--19,
            .bird--19:after,
            .bird--19:before,
            .bird--18:after,
            .bird--22,
            .bird--22:after,
            .bird--22:before,
            .bird--25,
            .bird--25:after,
            .bird--25:before,
            .bird--28,
            .bird--28:after,
            .bird--28:before,
            .bird--30:after {
                animation-duration: 0.7s;
                animation-delay: -0.5s;
            }

            .bird:after,
            .bird--1:before,
            .bird--2,
            .bird--2:before,
            .bird--2:after,
            .bird--3:after,
            .bird--6,
            .bird--6:after,
            .bird--6:before,
            .bird--8,
            .bird--8:after,
            .bird--8:before,
            .bird--11,
            .bird--11:after,
            .bird--11:before,
            .bird--12,
            .bird--12:after,
            .bird--12:before,
            .bird--16,
            .bird--16:after,
            .bird--16:before,
            .bird--20,
            .bird--20:after,
            .bird--20:before,
            .bird--18:before,
            .bird--23,
            .bird--23:after,
            .bird--23:before,
            .bird--26,
            .bird--26:after,
            .bird--26:before,
            .bird--29,
            .bird--29:after,
            .bird--29:before,
            .bird--30 {
                animation-duration: 0.6s;
                animation-delay: -0.75s;
            }
        }

        @keyframes fly-cycle {
            100% {
                background-position: -360px 0;
            }
        }
        @keyframes text-fade {
            0% {
                color: transparent;
                opacity: 1;
                top: -50%;
                left: auto;
            }
            1% {
                color: transparent;
                opacity: 0;
            }
            50% {
                color: transparent;
                opacity: 0;
            }
            100% {
                color: $color4;
                opacity: 1;
            }
        }
        @keyframes feather-fade {
            0% {
                top: -100px;
                opacity: 0;
            }
            25% {
                transform: rotate(10deg);
                left: 30%;
            }
            50% {
                transform: rotate(-5deg);
                opacity: 1;
                left: 45%;
            }
            75% {
                transform: rotate(10deg);
                left: 32%;
            }
            100% {
                transform: rotate(0deg);
                opacity: 1;
                top: 12px;
                left: 43%;
            }
        }
    }
</style>