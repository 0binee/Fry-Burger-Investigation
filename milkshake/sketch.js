// HTML 문서가 완전히 로드된 후에 실행
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. 필요한 요소들을 변수에 담기
    const modal = document.getElementById("documentModal");      // 모달 전체 화면
    const modalImg = document.getElementById("expandedImg");     // 확대될 이미지 태그
    const closeBtn = document.querySelector(".close-btn");       // 닫기 버튼(X)
    const evidenceImages = document.querySelectorAll('.evidence-img'); // 모든 증거물 이미지들

    // 이미지 클릭 시 모달 열기
    evidenceImages.forEach(function(img) {
        img.addEventListener('click', function() {
            modal.style.display = "block";
            modalImg.src = this.src;
        });
    });

    // X 버튼 클릭 시 닫기
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            modal.style.display = "none";
        });
    }

    // ★ [요청하신 기능] 배경(검은 부분) 클릭 시 닫기 ★
    // modal 변수는 검은 배경 전체를 의미합니다.
    modal.addEventListener('click', function(event) {
        // 클릭한 곳(target)이 검은 배경(modal) 그 자체일 때만 닫힘
        // (흰색 박스나 이미지를 클릭했을 땐 닫히지 않음)
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

});