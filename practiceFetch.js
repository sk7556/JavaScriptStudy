// 6번 실습(구조화한 데이터)
let url = `https://estsoft-openai-api.jejucodingcamp.workers.dev/`;

let data = [
    {"role": "system", "content": "assistant는 제주 여행 전문가이다."},
    {"role": "user", "content": "제주 3박4일 여행 일정을 만들어줘. 결과는 문장은 제외하고 json으로만 해줘."}
];

fetch(url,{
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    redirect: "follow",
})
.then(res => res.json())
.then(res => {
    console.log(JSON.parse(res.choices[0].message.content))
})