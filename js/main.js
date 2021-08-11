import { pets } from './data.js';
console.log(pets)

const petList = document.querySelector('#main .petList');

// 동물 목록 DOM 생성
function createPetList(pets) {
  // 배열(데이터)이 안비었는지 확인 후 출력
  if(pets.length !== 0){
    petList.innerHTML = ''; // 내용 초기화

    pets.forEach(pet => {
      const li = document.createElement('li');
      li.classList.add('pet');
      li.setAttribute('data-id', pet.id); // 목록에 id 부여
      li.innerHTML = `
        <a href="pet_detail.html?id=${pet.id}">
          <img 
            src="images/${pet.imgURL}" 
            alt="${pet.id}견종${pet.kind}" 
            class="img100"
        >
          <div class="textInfo">
            <h4>${pet.id}</h4>
            <p>견종: ${pet.kind}</p>
            <p>성별: ${pet.gender}</p>
            <p>나이: ${pet.age}</p>
            <p>중성화: ${pet.desexing}</p>
            <p>입양상태: ${pet.status}</p>
          </div>  
        </a>
      `
      petList.append(li); // 문서에 콘텐츠 삽입
    })
  } else {
    petList.innerHTML = `<li style='border:none;'><h4>자료가 없습니다.</h4></li>`
  }
}

createPetList(pets);

// 이벤트리스너
const petLi = document.querySelectorAll('.petList > li');

// 동물 목록 클릭시
petLi.forEach(li => {
  // console.log(li)
  li.addEventListener('click', function(){
    console.log(this)
  })
})

// 카테고리 검색 메뉴(필터링)
const categoryBtn = document.querySelectorAll('#category .btn');

categoryBtn.forEach(function(btn){
  var res = '';

  btn.addEventListener('click', function(e){
    console.log(this.classList.contains('btnAll'))
    if(this.classList.contains('btnAll')) {
      res = pets;
    } else if(this.classList.contains('btnAdoptPossible')) {
      res = pets.filter(function(pet){
        return pet.status === '입양가능'
      });
    } else if(this.classList.contains('btnAdoptProcess')) {
      res = pets.filter(function(pet){
        return pet.status === '입양진행중'
      });
    } else if(this.classList.contains('btnAdoptComplete')) {
      res = pets.filter(function(pet){
        return pet.status === '입양완료'
      });
    } else if(this.classList.contains('btnDeliver')){
      res = pets.filter(function(pet){
        return pet.status === '인도'
      });      
    }
    createPetList(res);
  })
})


