$(function () {
    Splitting();
    $('#logo').click(function () {
        $('html, body').animate({scrollTop: 0});
    });


    let revealContainers = document.querySelectorAll(".reveal");
    revealContainers.forEach((container, index) => {
        let image = container.querySelector("img");
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                toggleActions: "restart none none reset"
            }
        });

        // 공통: 요소 보여주기
        tl.set(container, { autoAlpha: 1 });

        // index에 따라 방향 및 시간차 다르게
        const xDirContainer = index === 0 ? -100 : 100; // 첫 번째는 왼쪽, 두 번째는 오른쪽
        const xDirImage = index === 0 ? 100 : -200;
        const baseDelay = index * 0.4;

        tl.from(container, {
            xPercent: xDirContainer,
            duration: 1.5,
            ease: Power2.out,
            delay: baseDelay
        });

        tl.from(image, {
            xPercent: xDirImage,
            scale: 1.3,
            duration: 1.5,
            ease: Power2.out
        }, `-=${1.5}`); // 겹쳐서 시작 (동기화)
    });
// .section2 배경과 글자색 변경 - .section3 진입 20% 전에 시작

    gsap.timeline({
        scrollTrigger: {
            trigger: ".section2 .title",
            start: "top 80%", // 화면에 들어올 때 트리거
            toggleActions: "play reverse play reverse"
        }
    })
        .fromTo(
            ".section2 .title .a", {
                x: "200%",
                opacity: 0
            }, {
                x: "0%",
                opacity: 1,
                ease: "power2.out",
                duration: 1.2
            }
        )
        .fromTo(
            ".section2 .title .b", {
                x: "-200%",
                opacity: 0
            }, {
                x: "0%",
                opacity: 1,
                ease: "power2.out",
                duration: 1.2
            }, "-=1.0" // 이전 애니메이션과 겹치게
        );
// .section2 배경과 글자색 변경 - .section3 진입 20% 전에 시작
    gsap.to("body", {
        backgroundColor: "var(--kmong-color)",
        color: "#fff",
        duration: 0.5,
        scrollTrigger: {
            trigger: ".section3",
            start: "top 90%", // .section3 시작 지점의 20% 앞 (100%에서 80%)
            toggleActions: "play none none reverse"
        }
    });




    const linkData = [
        {name: '더씨앤엠', href: 'https://www.creativemore.co.kr/', en: 'cnm'},
        {name: '친닥', href: 'https://chindr.co.kr/', en: 'chindoc'},
        {name: '카페이', href: 'http://carpay.co.kr/', en: 'carpay'},
        {name: '교유당', href: 'http://gyoyudang.com', en: 'gyoyudang'},
        {name: '이음통신', href: 'https://eum12345.mycafe24.com', en: 'eum'},
        {name: '클린앤핏', href: 'https://cleannfit.co.kr/', en: 'cleannfit'},
        {name: '킨텍스튼튼본의원', href: 'http://ktxtntnbone.com', en: 'ktxclinic'},
        {name: '에이씨지로지스', href: 'http://acglogi.com', en: 'acglogis'},
        {name: '오일마스터', href: 'http://oilmaster.co.kr', en: 'oilmaster'},
        {name: '연세대학교', href: 'http://batterylab.yonsei.ac.kr/', en: 'yonsei'},
        {name: '달라 (프랜차이즈)', href: 'dreamdallalab.mycafe24.com', en: 'dalla'},
        {name: '이안솔루텍', href: 'http://www.eansol.kr/', en: 'eansol'},
        {name: '바람누리', href: 'http://baramnuri.co.kr/', en: 'baramnuri'},
        {name: '르우컴퍼니', href: 'http://reucompany.com/', en: 'reucompany'},
        {name: '정지데이터', href: 'http://jungjidata.co.kr/', en: 'jungjidata'},
        {name: '대한오토픽', href: 'http://koreaautopick.com/', en: 'autopick'},
        {name: '롤링핀', href: 'http://rollingpin-franchise.co.kr/', en: 'rollingpin'},
        {name: '자방', href: 'https://zabang.co.kr/', en: 'zabang'},
        {name: '상지', href: 'https://kgsj.co.kr/', en: 'sangji'},
        {name: '디플나인', href: 'https://www.dipple9.com/', en: 'dipple9'},
        {name: '곤충경진대회', href: 'https://xn--289axc6s87pda019kypx39gzusczc.com/', en: 'insectcomp'}

    ];
    const workList = document.getElementById("workList");

    for (let i = 0; i < linkData.length; i += 3) {
        const group = linkData.slice(i, i + 3);

        const elem = document.createElement("div");
        elem.className = "row row-cols-1 row-cols-md-3 g-4 ";

        group.forEach((item, index) => {
            const col = document.createElement("div");
            col.className = "col";

            col.innerHTML = `
      <a  href="${item.href}" target="_blank" rel="noopener" class="portfolio-img shadow-lg">
        <img src="/img/${item.en}.png" class="img-default" alt="${item.name}">
                <img src="/img/${item.en}_hover.png" class="img-hover" alt="${item.name}">
      </a>
    `;
            elem.appendChild(col);
        });
        workList.appendChild(elem);
    }
    // #workList 콘텐츠가 로드된 후 실행되도록 DOMContentLoaded를 활용


    // DOM 삽입 후 실행되어야 합니다.
    setTimeout(() => {
        gsap.utils.toArray("#workList .row").forEach(item => {
            gsap.fromTo(item, {
                opacity: 0,
                y: 50,  // 처음에 살짝 위로 밀어놓음 (더 자연스럽게)
            }, {
                opacity: 1,
                y: 0,  // 내려와서 원래 위치에 도달
                duration: 1.2,  // 조금 더 부드럽게
                stagger: 0.1, // 빠르면서도 자연스럽게
                scrollTrigger: {
                    trigger: item,  // 해당 아이템이 화면에 들어오면
                    start: "top 80%", // 사용자가 가깝게 나올 때 시작
                    end: "bottom 50%", // 해당 row 끝날 즈음 자연스럽게 끝
                    toggleActions: "play none none reverse"
                }
            });
        })
    }, 300); // 데이터 렌더링 완료 이후 실행 (임시 지연)
    ScrollTrigger.create({
        trigger: ".section0",
        start: "bottom 80%", // section0의 bottom이 화면의 80% 지점일 때 트리거됨
        end:'50% end',
        onEnterBack: () => {
            gsap.to(".section0", {
                scale: 1,
                duration: 2,
            });

        },

        onLeave: () => {
            gsap.to("body", {
                backgroundColor: "var(--bg)",
                color: "#333",
                duration: 0.4,
                overwrite: true
            });
            gsap.to(".section0", {
                scale: 0,
                duration: 2,
            });
        },

    });




    const swiper = new Swiper(".swiper-container", {
        slidesPerView: "auto",
        spaceBetween: 0,
        allowTouchMove: false,

    });

    const wrapper = document.querySelector(".swiper-wrapper");

    // 슬라이드 하나의 정확한 px 값 측정
    const slide = wrapper.querySelector(".swiper-slide");
    const slideWidth = slide.offsetWidth;
    const totalSlides = wrapper.querySelectorAll(".swiper-slide").length;

    // 정확한 스크롤 거리 계산
    const scrollLength = (slideWidth * totalSlides) - window.innerWidth;
// 기존 .section3 타겟 애니메이션

    // GSAP 적용
// 기존 pin 스크롤 애니메이션
    gsap.to(".swiper-wrapper", {
        x: () => `-${scrollLength}px`,
        ease: "none",
        scrollTrigger: {
            trigger: ".pinned-carousel",
            start: "top top",
            end: `+=${scrollLength}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,

        }
    });
    ScrollTrigger.create({
        trigger: ".pinned-carousel",
        start: "top top",
        end: `+=${scrollLength+100}`,
        scrub: 1,
        onEnter: () => {
            gsap.to("body", {
                backgroundColor: "var(--kmong-color)",
                color: "#fff",
                duration: 0.5,
                overwrite: true
            });
        },
        onLeaveBack: () => {
            gsap.to("body", {
                backgroundColor: "var(--bg)",
                color: "#333",
                duration: 0.5,
                overwrite: true
            });
        }
    });

// ✅ section3 등장 애니메이션 (pin 해제 후 자연스럽게 등장)
    gsap.to(".section3", {
        "--target": "0%",
        ease: "none",
        scrollTrigger: {
            trigger: ".section3",
            start: "top top",
            end: "+=1000",
            pin: true,
            scrub: 1,

        }
    });
});


