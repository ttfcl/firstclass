let pass1 = document.querySelector("#pass1")
let pass2 = document.querySelector("#pass2")
// let passimg1 = document.querySelector("#passimg1")
let passimg2 = document.querySelector("#passimg2")
let passimg3 = document.querySelector("#passimg3")
let passimg4 = document.querySelector("#passimg4")
let passimg5 = document.querySelector("#passimg5")
let passimg6 = document.querySelector("#passimg6")
let passimg7 = document.querySelector("#passimg7")
let passimg8 = document.querySelector("#passimg8")
let passimg9 = document.querySelector("#passimg9")
let passimg10 = document.querySelector("#passimg10")
let passimg11 = document.querySelector("#passimg11")
let passimg12 = document.querySelector("#passimg12")

onload = () => {
    var 쿼리스트링 = new URLSearchParams(window.location.search)
    let text = 쿼리스트링.get('id')
    if(text === '서울') {
        $(pass1).append('서울 전 지역')
        pass2.textContent = '서울 전 지역을'
        passimg2.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EC%84%9C%EC%9A%B8%2F001.png?alt=media&token=54bd9287-a928-4735-9d1b-a4b502c73461&_gl=1*1vv15xq*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc4MTgwMy40NS4xLjE2ODU3ODIzMDguMC4wLjA.'
        passimg3.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EC%84%9C%EC%9A%B8%2F002.png?alt=media&token=bbf219ce-2a39-4255-aeb0-52c7d1fef0b3&_gl=1*hmvcai*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc4MTgwMy40NS4xLjE2ODU3ODIzMTQuMC4wLjA.'
        passimg4.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EC%84%9C%EC%9A%B8%2F003.png?alt=media&token=1eafd976-4fbd-4ecc-b855-7a362f6e02c7&_gl=1*p2uhs5*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc4MTgwMy40NS4xLjE2ODU3ODIzMTguMC4wLjA.'
        passimg5.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EC%84%9C%EC%9A%B8%2F004.png?alt=media&token=992e9700-f1a1-4044-a801-fe7efec78776&_gl=1*1mwpsdk*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc4MTgwMy40NS4xLjE2ODU3ODIzMjMuMC4wLjA.'
        passimg6.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EC%84%9C%EC%9A%B8%2F005.png?alt=media&token=e673ee8f-8031-44fd-b7c3-cea2611db0ac&_gl=1*1152etn*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc4MTgwMy40NS4xLjE2ODU3ODIzMjcuMC4wLjA.'
        passimg7.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EC%84%9C%EC%9A%B8%2F006.png?alt=media&token=71ee098e-7775-4bf6-9093-f4baf6c76acc&_gl=1*y1uw4j*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc4MTgwMy40NS4xLjE2ODU3ODIzMzMuMC4wLjA.'
        passimg8.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EC%84%9C%EC%9A%B8%2F007.png?alt=media&token=e4370637-c45e-4f17-b236-228445db0815&_gl=1*9ndnp6*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc4MTgwMy40NS4xLjE2ODU3ODIzMzguMC4wLjA.'
        passimg9.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EC%84%9C%EC%9A%B8%2F008.png?alt=media&token=b55b1600-6cce-40fe-bedc-ee7da5096ee7&_gl=1*z6pnlf*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc4MTgwMy40NS4xLjE2ODU3ODIzNDIuMC4wLjA.'
        passimg10.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EC%84%9C%EC%9A%B8%2F009.png?alt=media&token=41fae11a-da2a-4c99-b229-a5ccfbad68d3&_gl=1*aqfnhm*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc4MTgwMy40NS4xLjE2ODU3ODIzNDcuMC4wLjA.'
        passimg11.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EC%84%9C%EC%9A%B8%2F010.png?alt=media&token=1eea5e80-9234-420a-8e62-e88fd16b2df3&_gl=1*1lr5w8o*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc4MTgwMy40NS4xLjE2ODU3ODIzNTIuMC4wLjA.'
        passimg12.src = ''
    }
    if(text === '부산') {
        $(pass1).append('부산 전 지역')
        pass2.textContent = '부산 전 지역을'  
        passimg2.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EB%B6%80%EC%82%B0%2F001.png?alt=media&token=a02ab3bc-17f1-4c03-8c24-8e03e706f080&_gl=1*166oy90*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc4MTgwMy40NS4xLjE2ODU3ODIyNTUuMC4wLjA.'
        passimg3.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EB%B6%80%EC%82%B0%2F002.png?alt=media&token=3fab868a-f047-475b-bf6b-2dff94f2034f&_gl=1*1aq7qye*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc4MTgwMy40NS4xLjE2ODU3ODIyNjAuMC4wLjA.'
        passimg4.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EB%B6%80%EC%82%B0%2F003.png?alt=media&token=1ba5b0cc-dea2-406f-be51-dbfc93f2933c&_gl=1*11881wk*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc4MTgwMy40NS4xLjE2ODU3ODIyNjUuMC4wLjA.'
        passimg5.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EB%B6%80%EC%82%B0%2F004.png?alt=media&token=13b70c6b-0310-4adc-ad54-5c69eb2f6c5f&_gl=1*1um6jan*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc4MTgwMy40NS4xLjE2ODU3ODIyNjkuMC4wLjA.'
        passimg6.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EB%B6%80%EC%82%B0%2F005.png?alt=media&token=0875145b-1b53-4106-8c42-6db7f226f41a&_gl=1*7y27w3*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc4MTgwMy40NS4xLjE2ODU3ODIyNzMuMC4wLjA.'
        passimg7.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EB%B6%80%EC%82%B0%2F006.png?alt=media&token=63c6557c-f529-4449-8984-8852ee1f2f27&_gl=1*j3unhm*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc4MTgwMy40NS4xLjE2ODU3ODIyNzguMC4wLjA.'
        passimg8.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EB%B6%80%EC%82%B0%2F007.png?alt=media&token=8ee14a07-8d6d-4fac-9e5e-f0c6b24c3b32&_gl=1*1hf5f8g*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc4MTgwMy40NS4xLjE2ODU3ODIyODQuMC4wLjA.'
        passimg9.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EB%B6%80%EC%82%B0%2F008.png?alt=media&token=e4f6f179-7be4-4bf7-91b1-427586b12d97&_gl=1*khb77n*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc4MTgwMy40NS4xLjE2ODU3ODIyOTAuMC4wLjA.'
        passimg10.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EB%B6%80%EC%82%B0%2F009.png?alt=media&token=e277a097-570c-4688-9ff5-3354e7a37599&_gl=1*unppd7*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc4MTgwMy40NS4xLjE2ODU3ODIyOTQuMC4wLjA.'
        passimg11.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EB%B6%80%EC%82%B0%2F010.png?alt=media&token=6e5e3fe6-bcef-4e94-b0ff-ed7043c22062&_gl=1*4wo6ze*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc4MTgwMy40NS4xLjE2ODU3ODIyOTkuMC4wLjA.'
        passimg12.src = ''
    }
    if(text === '대구') {
        $(pass1).append('대구 전 지역')
        pass2.textContent = '대구 전 지역을'
        passimg2.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EB%8C%80%EA%B5%AC%2F001.png?alt=media&token=7429f580-58da-494b-9191-c16429ac342a&_gl=1*8qy6zl*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc4MTgwMy40NS4xLjE2ODU3ODIxMzguMC4wLjA.'
        passimg3.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EB%8C%80%EA%B5%AC%2F002.png?alt=media&token=1cfa56a2-5884-4f94-ba76-e3e673c6ca14&_gl=1*yypbm6*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc4MTgwMy40NS4xLjE2ODU3ODIxNDUuMC4wLjA.'
        passimg4.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EB%8C%80%EA%B5%AC%2F003.png?alt=media&token=46138e71-78ac-40e7-8f11-d17d7300db4f&_gl=1*1yo193r*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc4MTgwMy40NS4xLjE2ODU3ODIxNTAuMC4wLjA.'
        passimg5.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EB%8C%80%EA%B5%AC%2F004.png?alt=media&token=f5b52f78-bf63-4a51-bbd5-97b1b270d6bb&_gl=1*1o8qi0v*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc4MTgwMy40NS4xLjE2ODU3ODIxNTQuMC4wLjA.'
        passimg6.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EB%8C%80%EA%B5%AC%2F005.png?alt=media&token=ac5c1a49-3ec5-4aa5-8180-74f023b44019&_gl=1*1aa7r66*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc4MTgwMy40NS4xLjE2ODU3ODIxNTkuMC4wLjA.'
        passimg7.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EB%8C%80%EA%B5%AC%2F006.png?alt=media&token=e4531384-42b7-484f-8a90-c49d5edf0a76&_gl=1*17zukzn*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc4MTgwMy40NS4xLjE2ODU3ODIxNjMuMC4wLjA.'
        passimg8.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EB%8C%80%EA%B5%AC%2F007.png?alt=media&token=8eba9176-ab31-4b9c-81aa-42b5305100f0&_gl=1*1lfu4yo*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc4MTgwMy40NS4xLjE2ODU3ODIxNjcuMC4wLjA.'
        passimg9.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EB%8C%80%EA%B5%AC%2F008.png?alt=media&token=3dbaa8a0-cddd-48a7-8822-3d099e12ca55&_gl=1*br1zeu*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc4MTgwMy40NS4xLjE2ODU3ODIxNzAuMC4wLjA.'
        passimg10.src = ''
        passimg11.src = ''
        passimg12.src = ''
    }
    if(text === '인천') {
        $(pass1).append('인천 전 지역')
        pass2.textContent = '인천 전 지역을'
        passimg2.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EC%9D%B8%EC%B2%9C%2F001.png?alt=media&token=9d4f2e26-6577-4a48-993c-0f6ba68699ab&_gl=1*1qiev2k*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc4MTgwMy40NS4xLjE2ODU3ODI0ODIuMC4wLjA.'
        passimg3.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EC%9D%B8%EC%B2%9C%2F002.png?alt=media&token=67aa3c27-5894-4449-9981-2a332746a5ef&_gl=1*pn3oqb*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc4MTgwMy40NS4xLjE2ODU3ODI0OTAuMC4wLjA.'
        passimg4.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EC%9D%B8%EC%B2%9C%2F003.png?alt=media&token=035f11c0-b72d-4a9a-a8b6-8451d4c316b0&_gl=1*svlo1b*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc4MTgwMy40NS4xLjE2ODU3ODI0OTYuMC4wLjA.'
        passimg5.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EC%9D%B8%EC%B2%9C%2F004.png?alt=media&token=ceae926b-c1d1-4f66-91b1-32b5961589f6&_gl=1*1acl1q0*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc4MTgwMy40NS4xLjE2ODU3ODI1MDAuMC4wLjA.'
        passimg6.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EC%9D%B8%EC%B2%9C%2F005.png?alt=media&token=ca78bdf0-a438-4765-aa17-7c47ee31e45e&_gl=1*123j5nu*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc4MTgwMy40NS4xLjE2ODU3ODI1MDUuMC4wLjA.'
        passimg7.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EC%9D%B8%EC%B2%9C%2F006.png?alt=media&token=c403b397-21fa-4add-8516-1f0bad0b55fe&_gl=1*2rs1tf*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc4MTgwMy40NS4xLjE2ODU3ODI1MTAuMC4wLjA.'
        passimg8.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EC%9D%B8%EC%B2%9C%2F007.png?alt=media&token=e2bea82a-d7c1-4357-9a17-b9196c5f6aab&_gl=1*b0qroh*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc4MTgwMy40NS4xLjE2ODU3ODI1MTUuMC4wLjA.'
        passimg9.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EC%9D%B8%EC%B2%9C%2F008.png?alt=media&token=c880e9cf-4f02-4887-868d-9b934e95ce52&_gl=1*mm6n1m*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc4MTgwMy40NS4xLjE2ODU3ODI1MTkuMC4wLjA.'
        passimg10.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EC%9D%B8%EC%B2%9C%2F009.png?alt=media&token=f3c1fcae-6d39-4c83-a025-996bd786bae4&_gl=1*ne6281*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc4MTgwMy40NS4xLjE2ODU3ODI1MjQuMC4wLjA.'
        passimg11.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EC%9D%B8%EC%B2%9C%2F010.png?alt=media&token=ac3481de-6ec2-44eb-96b4-c2af6dc41c85&_gl=1*drrvsu*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc4MTgwMy40NS4xLjE2ODU3ODI1MjguMC4wLjA.'
        passimg12.src = ''
        passimg12.src = ''
    }
    if(text === '광주') {
        $(pass1).append('광주 전 지역')
        pass2.textContent = '광주 전 지역을'
        passimg2.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EA%B4%91%EC%A3%BC%2F001.png?alt=media&token=b138d4b2-4738-4b9f-a7a8-98a1c550b7ec&_gl=1*14o63ki*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc4MTgwMy40NS4xLjE2ODU3ODIwODMuMC4wLjA.'
        passimg3.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EA%B4%91%EC%A3%BC%2F002.png?alt=media&token=ca7f7eaa-cba5-46b5-8d73-c896fa3ebf2e&_gl=1*d8iist*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc4MTgwMy40NS4xLjE2ODU3ODIwOTEuMC4wLjA.'
        passimg4.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EA%B4%91%EC%A3%BC%2F003.png?alt=media&token=7b91ffb2-8ba4-4094-9092-e8f49c94add6&_gl=1*51bcuj*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc4MTgwMy40NS4xLjE2ODU3ODIwOTYuMC4wLjA.'
        passimg5.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EA%B4%91%EC%A3%BC%2F004.png?alt=media&token=a8184600-5b00-45a0-8880-d8627edd98ba&_gl=1*iu35iu*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc4MTgwMy40NS4xLjE2ODU3ODIxMDAuMC4wLjA.'
        passimg6.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EA%B4%91%EC%A3%BC%2F005.png?alt=media&token=a3d9c944-248f-4dba-9810-7665dacb98e5&_gl=1*ufb1us*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc4MTgwMy40NS4xLjE2ODU3ODIxMDUuMC4wLjA.'
        passimg7.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EA%B4%91%EC%A3%BC%2F006.png?alt=media&token=a21a74fe-43be-4765-8b48-069aeb9dab3f&_gl=1*1rjeo07*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc4MTgwMy40NS4xLjE2ODU3ODIxMTEuMC4wLjA.'
        passimg8.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EA%B4%91%EC%A3%BC%2F007.png?alt=media&token=3d4e82ca-4574-4e52-8aa0-9c194a8e2851&_gl=1*1i6yynj*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc4MTgwMy40NS4xLjE2ODU3ODIxMTUuMC4wLjA.'
        passimg9.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EA%B4%91%EC%A3%BC%2F008.png?alt=media&token=dd03ef1e-5dbd-491a-8d6f-3446e92ef4a6&_gl=1*1ec6544*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc4MTgwMy40NS4xLjE2ODU3ODIxMTkuMC4wLjA.'
        passimg10.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EA%B4%91%EC%A3%BC%2F009.png?alt=media&token=af9e472a-8411-44b5-93d8-d25ef80e8053&_gl=1*1fex88l*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc4MTgwMy40NS4xLjE2ODU3ODIxMjUuMC4wLjA.'
        passimg11.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EA%B4%91%EC%A3%BC%2F010.png?alt=media&token=794c1a00-8fa3-45de-93df-5ef53ade304a&_gl=1*1lkbwxq*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc4MTgwMy40NS4xLjE2ODU3ODIxMjkuMC4wLjA.'
        passimg12.src = ''
    }
    if(text === '대전') {
        $(pass1).append('대전 전 지역')
        pass2.textContent = '대전 전 지역을'
        passimg2.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EB%8C%80%EC%A0%84%2F001.png?alt=media&token=ee4f3e43-c93d-448f-a9ff-3855be940683&_gl=1*1nzlhqf*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc4MTgwMy40NS4xLjE2ODU3ODIxODIuMC4wLjA.'
        passimg3.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EB%8C%80%EC%A0%84%2F002.png?alt=media&token=a46c8ece-bdba-43fc-99b3-dce1c0ed963f&_gl=1*za6oqe*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc4MTgwMy40NS4xLjE2ODU3ODIxOTMuMC4wLjA.'
        passimg4.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EB%8C%80%EC%A0%84%2F003.png?alt=media&token=d1785471-382c-4c7c-a313-705594d281b9&_gl=1*1am8gzp*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc4MTgwMy40NS4xLjE2ODU3ODIxOTkuMC4wLjA.'
        passimg5.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EB%8C%80%EC%A0%84%2F004.png?alt=media&token=872eb0d4-4d8f-4a4e-b63f-6759bc9e752a&_gl=1*k4kap1*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc4MTgwMy40NS4xLjE2ODU3ODIyMDQuMC4wLjA.'
        passimg6.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EB%8C%80%EC%A0%84%2F005.png?alt=media&token=4969e52a-17bd-41c9-b28f-07025b66c194&_gl=1*fcug9g*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc4MTgwMy40NS4xLjE2ODU3ODIyMDkuMC4wLjA.'
        passimg7.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EB%8C%80%EC%A0%84%2F006.png?alt=media&token=830daf03-e051-44f2-9c50-8ba778b338ad&_gl=1*1p0sivc*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc4MTgwMy40NS4xLjE2ODU3ODIyMTMuMC4wLjA.'
        passimg8.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EB%8C%80%EC%A0%84%2F007.png?alt=media&token=a21217f1-7c92-4a5f-adb0-7bde1c8523d6&_gl=1*12f6dpn*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc4MTgwMy40NS4xLjE2ODU3ODIyMTcuMC4wLjA.'
        passimg9.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EB%8C%80%EC%A0%84%2F008.png?alt=media&token=7a29e808-4ecf-45e1-b843-cf716f7018d4&_gl=1*1x8r5or*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc4MTgwMy40NS4xLjE2ODU3ODIyMjguMC4wLjA.'
        passimg10.src = ''
        passimg11.src = ''
        passimg12.src = ''
    }
    if(text === '울산') {
        $(pass1).append('울산 전 지역')
        pass2.textContent = '울산 전 지역을'
        passimg2.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EC%9A%B8%EC%82%B0%2F001.png?alt=media&token=a19314db-c8e7-4af9-9d18-7053f0a67ac3&_gl=1*v4cedf*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc4MTgwMy40NS4xLjE2ODU3ODI0MTQuMC4wLjA.'
        passimg3.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EC%9A%B8%EC%82%B0%2F002.png?alt=media&token=7ba131b7-efa3-461a-9d10-8a2324914541&_gl=1*a3zbyj*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc4MTgwMy40NS4xLjE2ODU3ODI0MjEuMC4wLjA.'
        passimg4.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EC%9A%B8%EC%82%B0%2F003.png?alt=media&token=e1413fab-b8f5-4cfe-9068-c25cb04b0d88&_gl=1*76jep9*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc4MTgwMy40NS4xLjE2ODU3ODI0MjYuMC4wLjA.'
        passimg5.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EC%9A%B8%EC%82%B0%2F004.png?alt=media&token=7c51838d-81fb-4569-8aa9-73518c1f58d4&_gl=1*12fp6yo*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc4MTgwMy40NS4xLjE2ODU3ODI0MzEuMC4wLjA.'
        passimg6.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EC%9A%B8%EC%82%B0%2F005.png?alt=media&token=c94ebf83-779a-4ec0-a39a-702acf6491aa&_gl=1*1jpglcn*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc4MTgwMy40NS4xLjE2ODU3ODI0MzcuMC4wLjA.'
        passimg7.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EC%9A%B8%EC%82%B0%2F006.png?alt=media&token=c2fadb85-5b15-4bfb-9c7d-51b4a8663603&_gl=1*y3xxgj*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc4MTgwMy40NS4xLjE2ODU3ODI0NDIuMC4wLjA.'
        passimg8.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EC%9A%B8%EC%82%B0%2F007.png?alt=media&token=685743ab-1dca-4296-a4a0-28546871c443&_gl=1*pvgle3*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc4MTgwMy40NS4xLjE2ODU3ODI0NDYuMC4wLjA.'
        passimg9.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EC%9A%B8%EC%82%B0%2F008.png?alt=media&token=01709efc-4b99-44da-94d9-b0cd0737f1c3&_gl=1*1ssrw26*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc4MTgwMy40NS4xLjE2ODU3ODI0NTUuMC4wLjA.'
        passimg10.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EC%9A%B8%EC%82%B0%2F009.png?alt=media&token=a343d577-3b5b-4788-8975-5eefc8706137&_gl=1*1e06eik*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc4MTgwMy40NS4xLjE2ODU3ODI0NjEuMC4wLjA.'
        passimg11.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EC%9A%B8%EC%82%B0%2F010.png?alt=media&token=0d633057-a350-45fc-b1fc-878ea9adb2f6&_gl=1*1ywr40h*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc4MTgwMy40NS4xLjE2ODU3ODI0NjguMC4wLjA.'
        passimg12.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EC%9A%B8%EC%82%B0%2F011.png?alt=media&token=f88c4d7d-f053-451d-b226-7ac464366902&_gl=1*2ivkcj*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc4MTgwMy40NS4xLjE2ODU3ODI0NzMuMC4wLjA.'
    }
    if(text === '전북') {
        $(pass1).append('전북 전 지역')
        pass2.textContent = '전북 전 지역을'
        passimg2.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EC%A0%84%EB%B6%81%2F001.png?alt=media&token=6afa69e0-f6d9-4007-aedf-6fcb8bb5c9f6&_gl=1*1i6e4u4*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc4MTgwMy40NS4xLjE2ODU3ODI1NDIuMC4wLjA.'
        passimg3.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EC%A0%84%EB%B6%81%2F002.png?alt=media&token=84d17d80-7d68-41b6-8077-a123e8bb19c7&_gl=1*172o5b9*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc4MTgwMy40NS4xLjE2ODU3ODI1NDcuMC4wLjA.'
        passimg4.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EC%A0%84%EB%B6%81%2F003.png?alt=media&token=6cb74a04-cc0a-4e62-8a57-bc98d15ef7b7&_gl=1*uftid3*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc4MTgwMy40NS4xLjE2ODU3ODI1NTIuMC4wLjA.'
        passimg5.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EC%A0%84%EB%B6%81%2F004.png?alt=media&token=142b793f-f798-4252-ba6f-4d643e8eabe3&_gl=1*kk6p5r*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc4MTgwMy40NS4xLjE2ODU3ODI1NTYuMC4wLjA.'
        passimg6.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EC%A0%84%EB%B6%81%2F005.png?alt=media&token=a7625e28-90af-48e7-a3d6-6136278d8918&_gl=1*1g4volf*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc4MTgwMy40NS4xLjE2ODU3ODI1NjIuMC4wLjA.'
        passimg7.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EC%A0%84%EB%B6%81%2F006.png?alt=media&token=bcdc3736-ac31-4086-a78c-163a9fcbb693&_gl=1*17d31kb*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc4MTgwMy40NS4xLjE2ODU3ODI1NjYuMC4wLjA.'
        passimg8.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EC%A0%84%EB%B6%81%2F007.png?alt=media&token=ade13929-36f5-42a9-8c83-d5ab6709a181&_gl=1*47k3k6*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc4MTgwMy40NS4xLjE2ODU3ODI1NzEuMC4wLjA.'
        passimg9.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EC%A0%84%EB%B6%81%2F008.png?alt=media&token=9de50c08-a808-407b-a15b-9dd714db8663&_gl=1*b8ngmm*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc4MTgwMy40NS4xLjE2ODU3ODI1NzUuMC4wLjA.'
        passimg10.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EC%A0%84%EB%B6%81%2F009.png?alt=media&token=1b92eda9-e714-4c5b-bc53-baa09503bec1&_gl=1*1s8cavd*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc4MTgwMy40NS4xLjE2ODU3ODI1ODAuMC4wLjA.'
        passimg11.src = ''
        passimg12.src = ''
    }
    if(text === '세종') {
        $(pass1).append('세종 전 지역')
        pass2.textContent = '세종 전 지역을'
        passimg2.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EC%84%B8%EC%A2%85%2F001.png?alt=media&token=c56c464c-81a2-4239-90f1-1d94782ecafb&_gl=1*1fl6l5i*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc4MTgwMy40NS4xLjE2ODU3ODIzNjAuMC4wLjA.'
        passimg3.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EC%84%B8%EC%A2%85%2F002.png?alt=media&token=14421bbe-d583-46d8-b933-3db31240fb8b&_gl=1*8l2a7b*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc4MTgwMy40NS4xLjE2ODU3ODIzNzEuMC4wLjA.'
        passimg4.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EC%84%B8%EC%A2%85%2F003.png?alt=media&token=50a21d4e-d0f9-4314-80b7-6495b8e3738d&_gl=1*ppytgw*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc4MTgwMy40NS4xLjE2ODU3ODIzNzcuMC4wLjA.'
        passimg5.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EC%84%B8%EC%A2%85%2F004.png?alt=media&token=16fda808-b249-448a-b03c-5cb3dba2f080&_gl=1*174rngo*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc4MTgwMy40NS4xLjE2ODU3ODIzODEuMC4wLjA.'
        passimg6.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EC%84%B8%EC%A2%85%2F005.png?alt=media&token=72757106-5708-4982-80ae-7bcea32f1e04&_gl=1*1geifs0*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc4MTgwMy40NS4xLjE2ODU3ODIzODUuMC4wLjA.'
        passimg7.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EC%84%B8%EC%A2%85%2F006.png?alt=media&token=e7b5d09c-7619-4686-a385-2c13d39d0fb5&_gl=1*grncqh*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc4MTgwMy40NS4xLjE2ODU3ODIzOTAuMC4wLjA.'
        passimg8.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EC%84%B8%EC%A2%85%2F007.png?alt=media&token=d1cecacd-cecc-4869-a0ba-0a4625e9604a&_gl=1*7p78b5*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc4MTgwMy40NS4xLjE2ODU3ODIzOTQuMC4wLjA.'
        passimg9.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EC%84%B8%EC%A2%85%2F008.png?alt=media&token=ddfe12e8-9014-4de3-b7a1-e9b738f454b3&_gl=1*z0cz3i*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc4MTgwMy40NS4xLjE2ODU3ODIzOTguMC4wLjA.'
        passimg10.src = ''
        passimg11.src = ''
        passimg12.src = ''
    }
    // if(text === '경기') {
    //     $(pass1).append('경기 전 지역')
    //     pass2.textContent = '경기 전 지역을'
    //     passimg2.src = ''
    //     passimg3.src = ''
    //     passimg4.src = ''
    //     passimg5.src = ''
    //     passimg6.src = ''
    //     passimg7.src = ''
    //     passimg8.src = ''
    //     passimg9.src = ''
    //     // passimg1.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2F%EC%A7%80%EC%97%AD%EB%B3%84%EB%A9%94%EC%9D%B8%2F008.png?alt=media&token=0aed0221-33b6-41ba-80af-7029d2ffdd9a'
    // }
    // if(text === '강원') {
    //     $(pass1).append('강원 전 지역')
    //     pass2.textContent = '강원 전 지역을'
    //     passimg2.src = ''
    //     passimg3.src = ''
    //     passimg4.src = ''
    //     passimg5.src = ''
    //     passimg6.src = ''
    //     passimg7.src = ''
    //     passimg8.src = ''
    //     passimg9.src = ''
    //     // passimg1.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2F%EC%A7%80%EC%97%AD%EB%B3%84%EB%A9%94%EC%9D%B8%2F009.png?alt=media&token=132b6270-b50a-495d-95a3-d149d4957a6e'
    // }
    // if(text === '충북') {
    //     $(pass1).append('충북 전 지역')
    //     pass2.textContent = '충북 전 지역을'
    //     passimg2.src = ''
    //     passimg3.src = ''
    //     passimg4.src = ''
    //     passimg5.src = ' '
    //     passimg6.src = ''
    //     passimg7.src = ''
    //     passimg8.src = ''
    //     passimg9.src = ''
    //     // passimg1.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2F%EC%A7%80%EC%97%AD%EB%B3%84%EB%A9%94%EC%9D%B8%2F010.png?alt=media&token=0db1218a-c51d-44a2-bf76-e8f7b988b0a2'
    // }
    // if(text === '충남') {
    //     $(pass1).append('충남 전 지역')
    //     pass2.textContent = '충남 전 지역을'
    //     passimg2.src = ''
    //     passimg3.src = ''
    //     passimg4.src = ''
    //     passimg5.src = ''
    //     passimg6.src = ''
    //     passimg7.src = ''
    //     passimg8.src = ''
    //     passimg9.src = ''
    //     // passimg1.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2F%EC%A7%80%EC%97%AD%EB%B3%84%EB%A9%94%EC%9D%B8%2F011.png?alt=media&token=f0b3a456-9ee0-4542-a1b7-aeae3c987543'
    // }
    
    // if(text === '전남') {
    //     $(pass1).append('전남 전 지역')
    //     pass2.textContent = '전남 전 지역을'
    //     passimg2.src = ''
    //     passimg3.src = ''
    //     passimg4.src = ''
    //     passimg5.src = ''
    //     passimg6.src = ''
    //     passimg7.src = ''
    //     passimg8.src = ''
    //     passimg9.src = ''
    //     // passimg1.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2F%EC%A7%80%EC%97%AD%EB%B3%84%EB%A9%94%EC%9D%B8%2F013.png?alt=media&token=76d9221d-c6f6-4c7e-8514-5e328e4edf5d'
    // }
    // if(text === '경북') {
    //     $(pass1).append('경북 전 지역')
    //     pass2.textContent = '경북 전 지역을'
    //     passimg2.src = ''
    //     passimg3.src = ''
    //     passimg4.src = ''
    //     passimg5.src = ''
    //     passimg6.src = ''
    //     passimg7.src = ''
    //     passimg8.src = ''
    //     passimg9.src = ''
    //     // passimg1.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2F%EC%A7%80%EC%97%AD%EB%B3%84%EB%A9%94%EC%9D%B8%2F014.png?alt=media&token=cf9994e7-09df-4379-bfa4-f6c85cec5122'
    // }
    // if(text === '경남') {
    //     $(pass1).append('경남 전 지역')
    //     pass2.textContent = '경남 전 지역을'
    //     passimg2.src = ''
    //     passimg3.src = ''
    //     passimg4.src = ' '
    //     passimg5.src = ''
    //     passimg6.src = ''
    //     passimg7.src = ''
    //     passimg8.src = ''
    //     passimg9.src = ''
    //     // passimg1.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2F%EC%A7%80%EC%97%AD%EB%B3%84%EB%A9%94%EC%9D%B8%2F015.png?alt=media&token=4ff57e47-0ad1-49d4-bdd3-3d211efb0497'
    // }
    // if(text === '제주') {
    //     $(pass1).append('제주 전 지역')
    //     pass2.textContent = '제주 전 지역을'
    //     passimg2.src = ''
    //     passimg3.src = ''
    //     passimg4.src = ''
    //     passimg5.src = ''
    //     passimg6.src = ''
    //     passimg7.src = ''
    //     passimg8.src = ''
    //     passimg9.src = ''
    //     // passimg1.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2F%EC%A7%80%EC%97%AD%EB%B3%84%EB%A9%94%EC%9D%B8%2F017.png?alt=media&token=ba6706a8-c1ee-4727-b439-98ba6bc2d803'
    // }
}