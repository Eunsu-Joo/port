$(function () {
    Splitting();
    new WOW().init();

    function animateCount(id, target, duration = 1500) {
        const element = document.getElementById(id);
        const start = 0;
        const increment = target / (duration / 10);
        let current = start;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current).toLocaleString();
        }, 10);
    }

    // 숫자 애니메이션 실행
    animateCount('new_count', 1084);
    animateCount('fix_count', 11825);
    animateCount('latest_count', 120);
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
        backgroundColor: "#000",
        color: "#fff",
        duration: 0.5,
        scrollTrigger: {
            trigger: ".section3",
            start: "top 90%", // .section3 시작 지점의 20% 앞 (100%에서 80%)
            toggleActions: "play none none reverse"
        }
    });

// 기존 .section3 타겟 애니메이션
    gsap.to(".section3", {
        "--target": "0%",
        ease: "none",
        scrollTrigger: {
            trigger: ".section3",
            start: "top top",
            end: "+=1000",
            pin: true,
            scrub: 1
        }
    });

    const linkData = [
        {name: '친닥', href: 'https://chindr.co.kr/'},
        {name: '카페이', href: 'http://carpay.co.kr/'},
        {name: '더씨앤엠', href: 'https://www.creativemore.co.kr/'},
        {name: '교유당', href: 'http://gyoyudang.com'},
        {name: '이음통신', href: 'https://eum12345.mycafe24.com'},
        {name: '클린앤핏', href: 'https://cleannfit.co.kr/'},
        {name: '킨텍스튼튼본의원', href: 'http://ktxtntnbone.com'},
        {name: '에이씨지로지스', href: 'http://acglogi.com'},
        {name: '오일마스터', href: 'http://oilmaster.co.kr'},
        {name: '연세대학교', href: 'http://batterylab.yonsei.ac.kr/'},
        {name: '이엔엠 (프랜차이즈)', href: 'https://dallalab.com/franchise'},
        {name: '이안솔루텍', href: 'http://www.eansol.kr/'},
        {name: '바람누리', href: 'http://baramnuri.co.kr/'},
        {name: '르우컴퍼니', href: 'http://reucompany.com/'},
        {name: '정지데이터', href: 'http://jungjidata.co.kr/'},
        {name: '대한오토픽', href: 'http://koreaautopick.com/'},
        {name: '롤링핀', href: 'http://rollingpin-franchise.co.kr/'},
        {name: '자방', href: 'https://zabang.co.kr/'},
        {name: '상지', href: 'https://kgsj.co.kr/'},
        {name: '디플나인', href: 'https://www.dipple9.com/'},
        {name: '곤충경진대회', href: 'https://xn--289axc6s87pda019kypx39gzusczc.com/'}
    ];
    const workList = document.getElementById("workList");

    for (let i = 0; i < linkData.length; i += 3) {
        const group = linkData.slice(i, i + 3);

        const li = document.createElement("li");
        li.className = "row row-cols-1 row-cols-md-3 g-3 wow fadeInUp";

        group.forEach((item, index) => {
            const globalIndex = i + index + 1;
            const col = document.createElement("div");
            col.className = "col";

            col.innerHTML = `
      <a class="tile" href="${item.href}" target="_blank" rel="noopener">
        <img src="/img/${globalIndex}.png" alt="${item.name}">
        <div class="details">
          <span class="title">${item.name}</span>

        </div>
      </a>
    `;
            li.appendChild(col);
        });
        workList.appendChild(li);
    }
});


// <a className="tile-card" href="${item.href}" target="_blank" rel="noopener">
//     <div className="img">
//         <img src="/img/${globalIndex}.png" alt="${item.name}"/>
//     </div>
//     <div className="text">
//         <h5>${item.name}</h5>
//         <p className="info">설명</p>
//     </div>
// </a>