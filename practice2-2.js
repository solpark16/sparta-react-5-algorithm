// 두 문자열의 교집합 문자 집합 구하기
// 문제 정의:
// 두 문자열이 주어졌을 때, 두 문자열에 모두 등장하는 문자를 집합으로 반환하라.

// 조건:

// 대소문자를 구분하지 않는다.
// 결과는 집합(Set) 형태로 반환한다.
// 예시:

// 입력: "apple", "pineapple"
// 출력: new Set(['p', 'l', 'e'])

function commonCharacters(s1, s2) {
  // 교집합 문자를 넣을 빈 배열 arr을 선언한다.
  // s1을 반복문으로 돌려 i번째 요소가 s2에 있을 경우 교집합 문자이므로 arr에 push한다.
  // arr에 겹치는 문자가 있을 가능성이 있으므로 해당 문자들을 제거해주는 new Set 메서드를 사용해 return 한다.
  const arr = [];
  for (let i = 0; i < s1.length; i++) {
    if (s2.includes(s1[i])) {
      arr.push(s1[i]);
    }
  }
  return new Set(arr);
}

// 테스트 코드
function testCommonCharacters() {
  const testCases = [
    { input: ["apple", "pineapple"], expected: new Set(["a", "p", "l", "e"]) },
    { input: ["hello", "world"], expected: new Set(["o", "l"]) },
    { input: ["abc", "def"], expected: new Set() },
    {
      input: ["abcdef", "fedcba"],
      expected: new Set(["a", "b", "c", "d", "e", "f"]),
    },
  ];

  testCases.forEach(({ input, expected }, index) => {
    try {
      const result = new Set(commonCharacters(input[0], input[1]));
      const isEqual =
        expected.size === result.size &&
        [...expected].every((value) => result.has(value));
      if (!isEqual)
        throw new Error(`Expected ${[...expected]}, but got ${[...result]}`);
      console.log(`Test ${index + 1}: Passed`);
    } catch (error) {
      console.log(`Test ${index + 1}: Failed - ${error.message}`);
    }
  });
}

// 테스트 함수 호출 터미널에 node practice2-2.js 실행
testCommonCharacters();
