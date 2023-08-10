export default {
 emits: ['response'],
 setup(props, {emit}) {
  emit('response', '자식 컴포넌트로부터 무언가를 받았어요!');
 },
 template: `
  <h2>자식 컴포넌트</h2>
 ` 
}