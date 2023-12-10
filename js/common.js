"use strict";

/**
 * 검색창 제어
 */
// 07) 검색창 요소(.search) 찾기.
const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");
// 검색창 요소를 클릭하면 실행.
searchEl.addEventListener("click", function () {
  searchInputEl.focus();
  // 07) input태그에 focus 처리
});
// 검색창 요소 내부 실제 input 요소에 포커스되면 실행.
searchInputEl.addEventListener("focus", function () {
  searchEl.classList.add("focused");
  // 07) 서치 요소에 클래스 이름 추가처리
  searchInputEl.setAttribute("placeholder", "통합검색");
  // 07) input 태그의 placeholder 에 위의 컨텐츠 추가처리
});
// 검색창 요소 내부 실제 input 요소에서 포커스가 해제(블러)되면 실행.
searchInputEl.addEventListener("blur", function () {
  searchEl.classList.remove("focused");
  // 07) 포커스 해제(블러) 시 클래스 삭제처리
  searchInputEl.setAttribute("placeholder", "");
});

/**
 * 올해가 몇 년도인지 계산
 */
const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear();