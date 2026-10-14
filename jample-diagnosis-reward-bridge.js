/* 잼플 진단페이지 공통 완료 이벤트 헬퍼: 같은 GitHub Pages 출처에서만 사용 */
(function(){
  'use strict';
  const types=['mbti','diagnosis','basket','invest','debt'];
  window.JampleDiagnosisReward={
    complete: function(type){
      if(!types.includes(type))throw new Error('등록되지 않은 진단 유형: '+type);
      // 실제 진단의 최종 결과가 정상적으로 완성·저장된 뒤에만 호출하세요.
      const demo = new URLSearchParams(location.search).get('demo')==='1';
      const key=demo?'jample_diagnosis_complete_demo_v1':'jample_diagnosis_complete_v1';
      localStorage.setItem(key,JSON.stringify({type,status:'completed',at:new Date().toISOString()}));
      return true;
    }
  };
})();
