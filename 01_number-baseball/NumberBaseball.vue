<template>
    <div>
        <h1>{{result}}</h1>
        <form v-on:submit="onSubmitForm">
            <input ref="answer" minlength="4" maxlength="4" v-model="value" />
            <button>입력</button>
        </form>
        <div>시도 : {{tries.length}}</div>
        <ul>
            <li v-for="t in tries" v-bind:key="t.try">
                <div>{{t.try}}</div>
                <div>{{t.result}}</div>
            </li>
        </ul>
    </div>
</template>

<script>
const getNumbers = () => { // 화면이랑 관련 없으므로 밖에
    const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const array = [];
    for (let i = 0; i < 4; i++) {
        const chosen = candidates.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        array.push(chosen);
    }
    return array;
};
export default {
    data() {
        return {
            answer: getNumbers(), // 랜덤 네 자리 수
            tries: [], // 시도
            value: '', // 입력
            result: '', // 결과
        }
    },
    methods: {
        onSubmitForm(event) {
            event.preventDefault();
            if (this.value === this.answer.join('')) { // 정답이면
                this.tries.push({
                    try: this.value,
                    result: '홈런',
                });
                this.result = '홈런';
                alert('게임을 다시 실행합니다.');
                this.value = '';
                this.answer = getNumbers();
                this.tries = [];
                this.$refs.answer.focus();
            } else {
                if (this.tries.length >= 9) { // 10번째 시도(9번째까지 했는데 한 번 더 틀림)
                    this.result = `실패! 10번 틀리셨습니다! 답은 ${this.answer.join('')}입니다!`;
                    alert('게임을 다시 시작합니다.');
                    this.value = '';
                    this.answer = getNumbers();
                    this.tries = [];
                    this.$refs.answer.focus();
                } else {
                    let strike = 0;
                    let ball = 0;
                    const answerArray = this.value.split('').map(v => parseInt(v)); // array를 각각 int로
                    for (let i = 0; i < 4; i += 1) {
                        if (answerArray[i] === this.answer[i]) { // 숫자 자릿수 모두 정답
                            strike++;
                        } else if (this.answer.includes(answerArray[i])) { // 숫자만 정답
                            ball++;
                        }
                    }
                    this.tries.push({
                        try: this.value,
                        result: `${strike} 스트라이크, ${ball} 볼입니다.`,
                    });
                }
            }
            this.value = '';
            this.$refs.answer.focus();
        }
    }
};
</script>

<style>

</style>