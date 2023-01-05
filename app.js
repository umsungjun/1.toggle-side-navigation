; (function () { // 즉시 실행
    'use strict'

    const get = (target) => {
        return document.querySelector(target)
    }

    const TOGGLE_STATE = 'TOGGLE_STATE'
    const $body = get('body') // body DOM 
    const toggleButton = get('.toggle') // togglebutton
    const $nav = get('nav') // nav DOM
    const navState = localStorage.getItem(TOGGLE_STATE) || 'close'// 현재 nav상태가 저장된 localstorage에서 키 값을 불러옴

    $body.style.visibility = 'visible' // 가장 먼저 body의 숨김 효과를 visible로 바꿔줌

    if (navState === 'close') { // 만약 nav상태가 닫힌 상태라면 nav classList에서 .active 제거
        $nav.classList.remove('active')
    }

    if (navState === 'open') { // 만약 nav상태가 열린 상태라면 nav classList에서 .active 추가
        $nav.classList.add('active')
    }


    const toggleNav = () => {

        const navState = localStorage.getItem(TOGGLE_STATE) || 'close' // 클릭 할때마다 키 값을 갱신 해줘야되서 안에서도 선언 키 값이 저장되어 있지않다면 'close'를 return

        if (navState === 'close') {
            $nav.classList.add('active')
            localStorage.setItem(TOGGLE_STATE, 'open')
        }

        if (navState === 'open') {
            $nav.classList.remove('active')
            localStorage.setItem(TOGGLE_STATE, 'close')
        }

    }

    toggleButton.addEventListener('click', toggleNav) // toggle button click event발생 시 toggleNav함수 실행


})()
