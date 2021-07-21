import { pets } from './data.js';
console.log(pets)

const petList = document.querySelector('#main .petList');

// 동물 목록 DOM 생성
function createPetList(pets) {
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
}

createPetList(pets);

// 이벤트리스터
const petLi = document.querySelectorAll('.petList > li');

petLi.forEach(li => {
  // console.log(li)
  li.addEventListener('click', function(){
    console.log(this)
  })
})



