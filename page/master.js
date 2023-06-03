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
        passimg2.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EC%84%9C%EC%9A%B8%2Fphoto_1_2023-06-02_21-22-03.jpg?alt=media&token=5fb0e2ad-e15e-4a8f-945c-5bb345cf9ce8&_gl=1*ljwtqq*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc2NTgwMS40My4xLjE2ODU3NjY2NzcuMC4wLjA.'
        passimg3.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EC%84%9C%EC%9A%B8%2Fphoto_1_2023-06-02_21-33-58.jpg?alt=media&token=13bcf476-8df0-4bbf-800a-5c9546747077&_gl=1*1vtfwfy*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc2NTgwMS40My4xLjE2ODU3NjY2ODIuMC4wLjA.'
        passimg4.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EC%84%9C%EC%9A%B8%2Fphoto_1_2023-06-02_21-34-10.jpg?alt=media&token=81b95be3-9a79-4f34-b631-4d49ea36a7a8&_gl=1*1a23li5*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc2NTgwMS40My4xLjE2ODU3NjY2ODguMC4wLjA.'
        passimg5.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EC%84%9C%EC%9A%B8%2Fphoto_2023-06-03_07-35-53.jpg?alt=media&token=5b7d155e-0f14-4d55-adbc-b4f08bfa3d45&_gl=1*uroap5*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc2NTgwMS40My4xLjE2ODU3NjY2OTQuMC4wLjA.'
        passimg6.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EC%84%9C%EC%9A%B8%2Fphoto_2_2023-06-03_09-32-25.jpg?alt=media&token=0898cd9c-7c78-4d28-9c4d-7844fe42050a&_gl=1*1ivih2c*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc2NTgwMS40My4xLjE2ODU3NjY3MDIuMC4wLjA.'
        passimg7.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EC%84%9C%EC%9A%B8%2Fphoto_4_2023-06-02_21-22-03.jpg?alt=media&token=5ba6686b-cab8-494d-9349-8ebb181dc7f6&_gl=1*155j62v*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc2NTgwMS40My4xLjE2ODU3NjY3MDguMC4wLjA.'
        passimg8.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EC%84%9C%EC%9A%B8%2Fphoto_4_2023-06-02_21-23-36.jpg?alt=media&token=eab4c2d4-7393-4b4f-89ec-dd01d0999e89&_gl=1*o1dgzt*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc2NTgwMS40My4xLjE2ODU3NjY3MTUuMC4wLjA.'
        passimg9.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EC%84%9C%EC%9A%B8%2Fphoto_6_2023-06-02_21-22-03.jpg?alt=media&token=68e30bac-34dc-4db9-88dc-5da87974d936&_gl=1*1aftdxx*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc2NTgwMS40My4xLjE2ODU3NjY3MjEuMC4wLjA.'
        passimg10.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EC%84%9C%EC%9A%B8%2Fphoto_7_2023-06-02_21-22-03.jpg?alt=media&token=e2f393e0-3a28-42bd-a59c-0253d950a994&_gl=1*1rkkmyq*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc2NTgwMS40My4xLjE2ODU3NjY3MjcuMC4wLjA.'
        passimg11.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EC%84%9C%EC%9A%B8%2Fphoto_7_2023-06-03_09-32-25.jpg?alt=media&token=9ff64822-273c-42a9-91c3-eb12ba1122db&_gl=1*7cob8q*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc2NTgwMS40My4xLjE2ODU3NjY3MzMuMC4wLjA.'
        passimg12.src = ''
    }
    if(text === '부산') {
        $(pass1).append('부산 전 지역')
        pass2.textContent = '부산 전 지역을'  
        passimg2.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EB%B6%80%EC%82%B0%2Fphoto_14_2023-06-02_21-33-58.jpg?alt=media&token=6e0757c6-8dfe-486f-90b8-33284945f168&_gl=1*se7x9x*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc2NTgwMS40My4xLjE2ODU3NjY2MDEuMC4wLjA.'
        passimg3.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EB%B6%80%EC%82%B0%2Fphoto_2023-06-03_07-30-21.jpg?alt=media&token=77067085-fdcf-4208-b78f-40c5cfd8cb09&_gl=1*a0ez6q*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc2NTgwMS40My4xLjE2ODU3NjY2MDcuMC4wLjA.'
        passimg4.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EB%B6%80%EC%82%B0%2Fphoto_2023-06-03_07-31-59.jpg?alt=media&token=0dedb387-0ff3-46ef-80a6-d15647d678bc&_gl=1*1ow7hu2*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc2NTgwMS40My4xLjE2ODU3NjY2MTMuMC4wLjA.'
        passimg5.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EB%B6%80%EC%82%B0%2Fphoto_2023-06-03_07-32-13.jpg?alt=media&token=3bf8cffa-1a06-410d-b777-19d6880962ab&_gl=1*1ar3skq*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc2NTgwMS40My4xLjE2ODU3NjY2MjIuMC4wLjA.'
        passimg6.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EB%B6%80%EC%82%B0%2Fphoto_2023-06-03_07-32-34.jpg?alt=media&token=a40017a0-8040-4187-91e1-bd820cd9999e&_gl=1*7ukl67*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc2NTgwMS40My4xLjE2ODU3NjY2MzEuMC4wLjA.'
        passimg7.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EB%B6%80%EC%82%B0%2Fphoto_2023-06-03_07-32-56.jpg?alt=media&token=236fea01-735d-4539-91f9-43f65f20cbc6&_gl=1*q3b3js*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc2NTgwMS40My4xLjE2ODU3NjY2MzcuMC4wLjA.'
        passimg8.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EB%B6%80%EC%82%B0%2Fphoto_4_2023-06-03_09-32-25.jpg?alt=media&token=5743e18f-2b5f-4f37-b83c-42f4722de3b0&_gl=1*3bepmz*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc2NTgwMS40My4xLjE2ODU3NjY2NDIuMC4wLjA.'
        passimg9.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EB%B6%80%EC%82%B0%2Fphoto_7_2023-06-02_21-33-58.jpg?alt=media&token=c53f1e2a-5b40-453b-825a-80d465fef663&_gl=1*p2qujs*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc2NTgwMS40My4xLjE2ODU3NjY2NDguMC4wLjA.'
        passimg10.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EB%B6%80%EC%82%B0%2Fphoto_8_2023-06-02_21-33-58.jpg?alt=media&token=3f38cea8-219a-4e22-8619-c1655267cb9f&_gl=1*16bxwiu*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc2NTgwMS40My4xLjE2ODU3NjY2NTUuMC4wLjA.'
        passimg11.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EB%B6%80%EC%82%B0%2Fphoto_8_2023-06-03_09-32-25.jpg?alt=media&token=f67d842a-27c9-40aa-a8b1-1fca2205cfd4&_gl=1*18p4yxa*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc2NTgwMS40My4xLjE2ODU3NjY2NjEuMC4wLjA.'
        passimg12.src = ''
    }
    if(text === '대구') {
        $(pass1).append('대구 전 지역')
        pass2.textContent = '대구 전 지역을'
        passimg2.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EB%8C%80%EA%B5%AC%2Fphoto_2023-06-03_07-31-42.jpg?alt=media&token=a7a7a259-2b74-41a4-8a49-422ed0b358fe&_gl=1*19mw0dp*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc2NTgwMS40My4xLjE2ODU3NjY0NzQuMC4wLjA.'
        passimg3.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EB%8C%80%EA%B5%AC%2Fphoto_2023-06-03_07-32-30.jpg?alt=media&token=c35fa154-6961-4ca2-9c6a-74c037796c9b&_gl=1*1bj64uh*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc2NTgwMS40My4xLjE2ODU3NjY0NzkuMC4wLjA.'
        passimg4.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EB%8C%80%EA%B5%AC%2Fphoto_2023-06-03_07-33-44.jpg?alt=media&token=599ace49-0be9-4df9-a9b6-58d3575a32e8&_gl=1*1gau6jy*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc2NTgwMS40My4xLjE2ODU3NjY0OTAuMC4wLjA.'
        passimg5.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EB%8C%80%EA%B5%AC%2Fphoto_2023-06-03_07-35-26.jpg?alt=media&token=93c8e144-905e-4212-845f-23453eb32f93&_gl=1*14kmhq4*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc2NTgwMS40My4xLjE2ODU3NjY0OTUuMC4wLjA.'
        passimg6.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EB%8C%80%EA%B5%AC%2Fphoto_2023-06-03_07-36-15.jpg?alt=media&token=c21b1ad1-6884-479d-b4a5-0e6cce0311d2&_gl=1*dkz0jv*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc2NTgwMS40My4xLjE2ODU3NjY1MDIuMC4wLjA.'
        passimg7.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EB%8C%80%EA%B5%AC%2Fphoto_2023-06-03_09-45-26.jpg?alt=media&token=3393c31c-b086-4413-a54c-6efcb91b615f&_gl=1*r0yk88*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc2NTgwMS40My4xLjE2ODU3NjY1MDguMC4wLjA.'
        passimg8.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EB%8C%80%EA%B5%AC%2Fphoto_3_2023-06-03_09-32-25.jpg?alt=media&token=e8f9765c-da99-44e0-87e9-e14f561e2547&_gl=1*1bayan0*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc2NTgwMS40My4xLjE2ODU3NjY1MTQuMC4wLjA.'
        passimg9.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EB%8C%80%EA%B5%AC%2Fphoto_6_2023-06-02_21-33-58.jpg?alt=media&token=cf0a15b9-92ec-40cf-a6a0-d9de2fad9a2f&_gl=1*1nadl7x*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc2NTgwMS40My4xLjE2ODU3NjY1MTkuMC4wLjA.'
        passimg10.src = ''
        passimg11.src = ''
        passimg12.src = ''
    }
    if(text === '인천') {
        $(pass1).append('인천 전 지역')
        pass2.textContent = '인천 전 지역을'
        passimg2.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EC%9D%B8%EC%B2%9C%2Fphoto_10_2023-06-02_21-33-58.jpg?alt=media&token=04be8573-8707-4ff5-ae2a-f1a69d185cce&_gl=1*5be1km*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc2NTgwMS40My4xLjE2ODU3NjY5MDUuMC4wLjA.'
        passimg3.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EC%9D%B8%EC%B2%9C%2Fphoto_11_2023-06-02_21-33-58.jpg?alt=media&token=ad6170a6-5d1d-429f-ae35-6dee745abb4e&_gl=1*s1mmm5*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc2NTgwMS40My4xLjE2ODU3NjY5MDkuMC4wLjA.'
        passimg4.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EC%9D%B8%EC%B2%9C%2Fphoto_2023-06-03_07-35-35.jpg?alt=media&token=8a5da250-4389-4804-abd6-d7125ba9346e&_gl=1*1e00mo7*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc2NTgwMS40My4xLjE2ODU3NjY5MTQuMC4wLjA.'
        passimg5.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EC%9D%B8%EC%B2%9C%2Fphoto_2023-06-03_07-35-46.jpg?alt=media&token=25f2b2af-6735-4943-9ae8-237be17fc990&_gl=1*1ssmgxh*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc2NTgwMS40My4xLjE2ODU3NjY5MjAuMC4wLjA.'
        passimg6.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EC%9D%B8%EC%B2%9C%2Fphoto_2023-06-03_09-43-27.jpg?alt=media&token=f2864a8b-cf4f-4e12-83cc-5409ad8f6e2f&_gl=1*1jfe4rr*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc2NTgwMS40My4xLjE2ODU3NjY5MjUuMC4wLjA.'
        passimg7.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EC%9D%B8%EC%B2%9C%2Fphoto_2_2023-06-02_21-44-58.jpg?alt=media&token=d378b4f0-f8c3-4ed3-a1d4-6a92fa93eec7&_gl=1*jtl0qm*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc2NTgwMS40My4xLjE2ODU3NjY5MzAuMC4wLjA.'
        passimg8.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EC%9D%B8%EC%B2%9C%2Fphoto_3_2023-06-02_21-34-10.jpg?alt=media&token=d8bfe3b3-558d-41ba-93ca-25e9aae183e5&_gl=1*vx2tia*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc2NTgwMS40My4xLjE2ODU3NjY5MzYuMC4wLjA.'
        passimg9.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EC%9D%B8%EC%B2%9C%2Fphoto_3_2023-06-02_21-45-07.jpg?alt=media&token=062ac357-2c81-4248-b691-45a76c89492e&_gl=1*im8c4u*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc2NTgwMS40My4xLjE2ODU3NjY5NDEuMC4wLjA.'
        passimg10.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EC%9D%B8%EC%B2%9C%2Fphoto_5_2023-06-03_09-32-25.jpg?alt=media&token=76818365-e67f-440a-bddb-e6ecd3dc7de5&_gl=1*z40buw*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc2NTgwMS40My4xLjE2ODU3NjY5NDYuMC4wLjA.'
        passimg11.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EC%9D%B8%EC%B2%9C%2Fphoto_9_2023-06-02_21-23-36.jpg?alt=media&token=bf73b9a6-6c79-4d1b-b4b7-91b42129322c&_gl=1*1wrgo4r*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc2NTgwMS40My4xLjE2ODU3NjY5NTIuMC4wLjA.'
        passimg12.src = ''
    }
    if(text === '광주') {
        $(pass1).append('광주 전 지역')
        pass2.textContent = '광주 전 지역을'
        passimg2.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EA%B4%91%EC%A3%BC%2Fphoto_10_2023-06-03_09-32-25.jpg?alt=media&token=f7d4a551-cdf3-4e9d-a668-63c8dc7a9961&_gl=1*td484o*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc2NTgwMS40My4xLjE2ODU3NjYzNzEuMC4wLjA.'
        passimg3.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EA%B4%91%EC%A3%BC%2Fphoto_12_2023-06-02_21-33-58.jpg?alt=media&token=afebcc14-75e5-4f6d-926c-2d4f1f185bca&_gl=1*flwh8r*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc2NTgwMS40My4xLjE2ODU3NjYzNzkuMC4wLjA.'
        passimg4.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EA%B4%91%EC%A3%BC%2Fphoto_13_2023-06-02_21-33-58.jpg?alt=media&token=f0c80750-9e60-4c22-9ae1-c4bcb16bae0d&_gl=1*1ehxh6j*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc2NTgwMS40My4xLjE2ODU3NjYzODYuMC4wLjA.'
        passimg5.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EA%B4%91%EC%A3%BC%2Fphoto_2023-06-03_07-30-34.jpg?alt=media&token=e779c983-db2a-4c69-8c7f-0fbf4e138ec2&_gl=1*esdtnm*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc2NTgwMS40My4xLjE2ODU3NjYzOTMuMC4wLjA.'
        passimg6.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EA%B4%91%EC%A3%BC%2Fphoto_2023-06-03_07-31-14.jpg?alt=media&token=18adeed0-4ab9-4585-bf4b-95378770ec71&_gl=1*1t1p451*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc2NTgwMS40My4xLjE2ODU3NjY0MDAuMC4wLjA.'
        passimg7.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EA%B4%91%EC%A3%BC%2Fphoto_2023-06-03_07-31-45.jpg?alt=media&token=413f0ae9-6660-4c81-bdb4-cf47b2c3a0cc&_gl=1*1wgktl*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc2NTgwMS40My4xLjE2ODU3NjY0MTguMC4wLjA.'
        passimg8.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EA%B4%91%EC%A3%BC%2Fphoto_2023-06-03_07-35-10.jpg?alt=media&token=9e42b493-8246-4b68-97b4-5ad903053fc7&_gl=1*1oi0civ*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc2NTgwMS40My4xLjE2ODU3NjY0MzUuMC4wLjA.'
        passimg9.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EA%B4%91%EC%A3%BC%2Fphoto_2023-06-03_07-35-19.jpg?alt=media&token=e9a8197d-91c7-4a09-b5a0-d45499ed00f9&_gl=1*1ppfu9j*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc2NTgwMS40My4xLjE2ODU3NjY0NDQuMC4wLjA.'
        passimg10.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EA%B4%91%EC%A3%BC%2Fphoto_2023-06-03_07-35-30.jpg?alt=media&token=ca297f8f-cdbf-4904-b95f-4a589d05f401&_gl=1*qbbs8e*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc2NTgwMS40My4xLjE2ODU3NjY0NTEuMC4wLjA.'
        passimg11.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EA%B4%91%EC%A3%BC%2Fphoto_2_2023-06-02_21-34-10.jpg?alt=media&token=ea29bfdb-e0fd-4ddb-b8a6-471dfb800c14&_gl=1*rjk5hk*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc2NTgwMS40My4xLjE2ODU3NjY0NTYuMC4wLjA.'
        passimg12.src = ''
    }
    if(text === '대전') {
        $(pass1).append('대전 전 지역')
        pass2.textContent = '대전 전 지역을'
        passimg2.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EB%8C%80%EC%A0%84%2Fphoto_2023-06-03_07-31-18.jpg?alt=media&token=80bb784f-c15d-4a3b-ab6c-c42227e7f176&_gl=1*mfcd9b*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc2NTgwMS40My4xLjE2ODU3NjY1MzEuMC4wLjA.'
        passimg3.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EB%8C%80%EC%A0%84%2Fphoto_2023-06-03_07-32-46.jpg?alt=media&token=0f68565a-fc08-4ced-9ce3-d40d90b138b7&_gl=1*6fk5od*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc2NTgwMS40My4xLjE2ODU3NjY1NDQuMC4wLjA.'
        passimg4.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EB%8C%80%EC%A0%84%2Fphoto_2023-06-03_07-35-39.jpg?alt=media&token=860cfb0f-43bf-4f4c-aea7-49bb9c9275d9&_gl=1*162flr8*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc2NTgwMS40My4xLjE2ODU3NjY1NTEuMC4wLjA.'
        passimg5.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EB%8C%80%EC%A0%84%2Fphoto_2023-06-03_07-35-50.jpg?alt=media&token=c81a5c7e-8b4a-4762-bdee-1c0f4fd84726&_gl=1*1p3lxxl*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc2NTgwMS40My4xLjE2ODU3NjY1NTguMC4wLjA.'
        passimg6.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EB%8C%80%EC%A0%84%2Fphoto_2023-06-03_07-36-07.jpg?alt=media&token=654c27ee-c74d-4ebf-8fde-8d2b6d500b55&_gl=1*1yki80a*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc2NTgwMS40My4xLjE2ODU3NjY1NjMuMC4wLjA.'
        passimg7.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EB%8C%80%EC%A0%84%2Fphoto_2023-06-03_09-43-10.jpg?alt=media&token=99c9b77e-b28b-4108-9ca5-e6acf3716bec&_gl=1*1g6pacd*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc2NTgwMS40My4xLjE2ODU3NjY1NjkuMC4wLjA.'
        passimg8.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EB%8C%80%EC%A0%84%2Fphoto_2023-06-03_09-45-58.jpg?alt=media&token=46468a5a-d495-40d2-be29-51316a1c4d43&_gl=1*uar15z*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc2NTgwMS40My4xLjE2ODU3NjY1NzQuMC4wLjA.'
        passimg9.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EB%8C%80%EC%A0%84%2Fphoto_4_2023-06-02_21-44-08.jpg?alt=media&token=505cfe36-a189-43d7-b253-e828a66af2a9&_gl=1*1fbdgwe*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc2NTgwMS40My4xLjE2ODU3NjY1ODIuMC4wLjA.'
        passimg10.src = ''
        passimg11.src = ''
        passimg12.src = ''
    }
    if(text === '울산') {
        $(pass1).append('울산 전 지역')
        pass2.textContent = '울산 전 지역을'
        passimg2.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EC%9A%B8%EC%82%B0%2Fphoto_2023-06-03_07-30-25.jpg?alt=media&token=2e57241f-d332-45ed-941e-10f836b9fa4e&_gl=1*1r5w23p*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc2NTgwMS40My4xLjE2ODU3NjY4MTUuMC4wLjA.'
        passimg3.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EC%9A%B8%EC%82%B0%2Fphoto_2023-06-03_07-31-10.jpg?alt=media&token=2be91c25-b8b0-437e-bfe9-9608f76ff64f&_gl=1*141liv9*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc2NTgwMS40My4xLjE2ODU3NjY4MjQuMC4wLjA.'
        passimg4.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EC%9A%B8%EC%82%B0%2Fphoto_2023-06-03_07-31-23.jpg?alt=media&token=c1e392e3-8053-4992-be5b-194e844be32b&_gl=1*6y52p2*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc2NTgwMS40My4xLjE2ODU3NjY4MzAuMC4wLjA.'
        passimg5.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EC%9A%B8%EC%82%B0%2Fphoto_2023-06-03_07-31-38.jpg?alt=media&token=93cb7099-8080-4f60-8ef4-6be0a77a6c4a&_gl=1*clze9m*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc2NTgwMS40My4xLjE2ODU3NjY4MzYuMC4wLjA.'
        passimg6.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EC%9A%B8%EC%82%B0%2Fphoto_2023-06-03_07-31-52.jpg?alt=media&token=a6a1bddb-a2cb-49fc-a7ca-6d4b34e594e4&_gl=1*1qatl8f*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc2NTgwMS40My4xLjE2ODU3NjY4NDIuMC4wLjA.'
        passimg7.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EC%9A%B8%EC%82%B0%2Fphoto_2023-06-03_07-32-02.jpg?alt=media&token=28db8072-ec4e-4d54-8e5b-328bf1988a9c&_gl=1*1d551wc*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc2NTgwMS40My4xLjE2ODU3NjY4NDguMC4wLjA.'
        passimg8.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EC%9A%B8%EC%82%B0%2Fphoto_2023-06-03_07-36-19.jpg?alt=media&token=e2960af9-f334-4455-8c8a-91c8d8bb65f3&_gl=1*xuv0q0*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc2NTgwMS40My4xLjE2ODU3NjY4NTQuMC4wLjA.'
        passimg9.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EC%9A%B8%EC%82%B0%2Fphoto_2023-06-03_07-36-27.jpg?alt=media&token=7df594bc-9821-454b-9694-72d37262ec93&_gl=1*b0mcuy*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc2NTgwMS40My4xLjE2ODU3NjY4NjAuMC4wLjA.'
        passimg10.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EC%9A%B8%EC%82%B0%2Fphoto_2023-06-03_09-43-48.jpg?alt=media&token=623a0543-e19d-4d89-9f59-d29f83973547&_gl=1*zgi4xv*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc2NTgwMS40My4xLjE2ODU3NjY4NjkuMC4wLjA.'
        passimg11.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EC%9A%B8%EC%82%B0%2Fphoto_3_2023-06-02_21-22-03.jpg?alt=media&token=b22df772-8441-48ac-a234-0416d8e59cdf&_gl=1*1ace4sj*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc2NTgwMS40My4xLjE2ODU3NjY4NzUuMC4wLjA.'
        passimg12.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EC%9A%B8%EC%82%B0%2Fphoto_5_2023-06-02_21-44-08.jpg?alt=media&token=329346b9-9149-4234-a908-64ab9d30d897&_gl=1*t4mias*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc2NTgwMS40My4xLjE2ODU3NjY4ODAuMC4wLjA.'
    }
    if(text === '전북') {
        $(pass1).append('전북 전 지역')
        pass2.textContent = '전북 전 지역을'
        passimg2.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EC%A0%84%EB%B6%81%2Fphoto_1_2023-06-02_21-45-07.jpg?alt=media&token=6a4c2b20-c6d8-4e22-8607-ab9150736448&_gl=1*15f9l3u*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc2NTgwMS40My4xLjE2ODU3NjY5NzEuMC4wLjA.'
        passimg3.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EC%A0%84%EB%B6%81%2Fphoto_2023-06-03_07-31-02.jpg?alt=media&token=3f824b15-d7de-4fd2-a55f-7499ae42ccb3&_gl=1*1aulv98*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc2NTgwMS40My4xLjE2ODU3NjY5NzYuMC4wLjA.'
        passimg4.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EC%A0%84%EB%B6%81%2Fphoto_2023-06-03_07-32-25.jpg?alt=media&token=3e0fdb1b-97ad-4544-80a7-4a773b79f366&_gl=1*uqt3vl*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc2NTgwMS40My4xLjE2ODU3NjY5ODIuMC4wLjA.'
        passimg5.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EC%A0%84%EB%B6%81%2Fphoto_2023-06-03_07-33-35.jpg?alt=media&token=3fcd5d86-1b12-4735-94ed-f358570a3608&_gl=1*hkti82*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc2NTgwMS40My4xLjE2ODU3NjY5ODguMC4wLjA.'
        passimg6.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EC%A0%84%EB%B6%81%2Fphoto_2023-06-03_07-34-33.jpg?alt=media&token=9a6e31df-f3f8-46f3-9538-f749c0220b0e&_gl=1*1jzz0wg*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc2NTgwMS40My4xLjE2ODU3NjY5OTMuMC4wLjA.'
        passimg7.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EC%A0%84%EB%B6%81%2Fphoto_2023-06-03_07-36-31.jpg?alt=media&token=4bb57707-9702-4c5c-9a77-bfc2ddd562d3&_gl=1*12q2chz*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc2NTgwMS40My4xLjE2ODU3NjY5OTkuMC4wLjA.'
        passimg8.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EC%A0%84%EB%B6%81%2Fphoto_2_2023-06-02_21-45-07.jpg?alt=media&token=0d84e6db-cb1f-470b-931c-2c9790908cf2&_gl=1*7l3bvb*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc2NTgwMS40My4xLjE2ODU3NjcwMDUuMC4wLjA.'
        passimg9.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EC%A0%84%EB%B6%81%2Fphoto_5_2023-06-02_21-23-36.jpg?alt=media&token=2b820433-c5f9-4f25-bf18-2c409ad7e98f&_gl=1*1796m4u*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc2NTgwMS40My4xLjE2ODU3NjcwMTAuMC4wLjA.'
        passimg10.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EC%A0%84%EB%B6%81%2Fphoto_9_2023-06-03_09-32-25.jpg?alt=media&token=96a35fe3-7b5a-471f-a889-877a98d70412&_gl=1*1cq5pqq*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc2NTgwMS40My4xLjE2ODU3NjcwMTYuMC4wLjA.'
        passimg11.src = ''
        passimg12.src = ''
    }
    if(text === '세종') {
        $(pass1).append('세종 전 지역')
        pass2.textContent = '세종 전 지역을'
        passimg2.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EC%84%B8%EC%A2%85%2Fphoto_10_2023-06-02_21-23-36.jpg?alt=media&token=7232def8-1d14-4b91-9180-8e92b605d6c1&_gl=1*9ureos*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc2NTgwMS40My4xLjE2ODU3NjY3NDUuMC4wLjA.'
        passimg3.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EC%84%B8%EC%A2%85%2Fphoto_2023-06-03_07-30-45.jpg?alt=media&token=6f69c775-f83c-4328-a7f0-b22aea90b499&_gl=1*1qk0kia*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc2NTgwMS40My4xLjE2ODU3NjY3NTguMC4wLjA.'
        passimg4.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EC%84%B8%EC%A2%85%2Fphoto_2023-06-03_07-32-22.jpg?alt=media&token=e3f7815f-754a-4b1f-9871-58fa95c68c11&_gl=1*1ymbvef*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc2NTgwMS40My4xLjE2ODU3NjY3NjQuMC4wLjA.'
        passimg5.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EC%84%B8%EC%A2%85%2Fphoto_2023-06-03_07-32-50.jpg?alt=media&token=09788e79-a805-4a94-bd6b-a7cab34424d0&_gl=1*z0prse*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc2NTgwMS40My4xLjE2ODU3NjY3NzEuMC4wLjA.'
        passimg6.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EC%84%B8%EC%A2%85%2Fphoto_2023-06-03_07-35-06.jpg?alt=media&token=cf953687-e88e-4b52-840f-424e238ef113&_gl=1*grwznd*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc2NTgwMS40My4xLjE2ODU3NjY3NzcuMC4wLjA.'
        passimg7.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EC%84%B8%EC%A2%85%2Fphoto_2023-06-03_07-35-23.jpg?alt=media&token=4e05c6ab-09e9-47da-a26d-cb7a9b22a88a&_gl=1*1nczljn*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc2NTgwMS40My4xLjE2ODU3NjY3ODQuMC4wLjA.'
        passimg8.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EC%84%B8%EC%A2%85%2Fphoto_2023-06-03_07-36-03.jpg?alt=media&token=8bc6e348-c794-4163-8a3d-00543ad203a2&_gl=1*1b7ed5u*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc2NTgwMS40My4xLjE2ODU3NjY3ODkuMC4wLjA.'
        passimg9.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2Faddd%2F%EC%84%B8%EC%A2%85%2Fphoto_2023-06-03_07-36-11.jpg?alt=media&token=00f4d4b9-1906-463f-835c-6a039952c967&_gl=1*vvzqea*_ga*MTM4Njk4MDYwOS4xNjYxMDAyMjUx*_ga_CW55HF8NVT*MTY4NTc2NTgwMS40My4xLjE2ODU3NjY3OTUuMC4wLjA.'
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