const data = 
{
    "id": 1,
    "productName": "버그를 Java라 버그잡는 개리씨 키링 개발자키링 금속키링",
    "price": 12500,
    "stockCount": 100,
    "thumbnailImg": "asset/img/1/thumbnailImg.jpg",
    "option": [],
    "discountRate": 0,
    "shippingFee": 1500,
    "detailInfoImage": [
    "asset/detail/2/detail1.png",
    "asset/detail/2/detail2.png"
    ],
    "viewCount": 0,
    "pubDate": "2022-02-28",
    "modDate": "2022-02-28"
}


const BASE_URL = "http://test.api.weniv.co.kr/"
const mainContainer = document.getElementById("main");

//상품 카드 만드는 부분
// 상품 이미지 주소, 가격, 상품이름을 받으면 상품 카드를 만들어주는 함수!
function createProductCard(imgUrl,price,productName) {
    const $productCard = document.createElement("div");
    const $productName = document.createElement("strong");
    const $price = document.createElement("span");
    const $thumbnailImg = document.createElement("img");

    $thumbnailImg.src = imgUrl;
    $price.innerText = price + "원";
    $productName.innerText = productName;
    $productCard.append($thumbnailImg, $productName, $price)

    return $productCard
}

// main 으로 기본 선언과 function 을 묶어줌 
function main() {
    // 이걸 fetch 로 받아오는 내용을 풀어서 json으로 만들려는 내용인듯 
    fetch(BASE_URL + "mall").then((res)=>{
        return res.json();
    }).then((json)=>{
        json.forEach(data=>{
            const productImgUrl = BASE_URL+data.thumbnailImg;
            const productName = data.productName;
            const price = data.price;
            // 위에서 작성한 card 함수 
            const $productCard = createProductCard(productImgUrl, price,productName)
            mainContainer.appendChild($productCard);


        })
    });

    

    // const productImgUrl = BASE_URL+data.thumbnailImg;
    // const productName = data.productName;
    // const price = data.price;
    // // 위에서 작성한 card 함수 
    // const $productCard = createProductCard(productImgUrl,productName, price)
    // mainContainer.appendChild($productCard);
}

// 마지막으로 함수 실행 해줘야 
main();