/**
 * @typedef {Object} StudyGroup
 * @property {string} tutor - 튜터 GitHub 사용자명
 * @property {Object.<string, string>} members - 멤버들의 GitHub 사용자명과 실명 매핑
 */

/**
 * 이거 한글로 넣으면 유니코드로 깨져버림, 근데 편의상 한글로 쓰겠음
 * @typedef {"1조"|"2조"|"3조"|"4조"} GroupName
 */

/**
 * @typedef {Record<GroupName, StudyGroup>} StudyGroups
 */

/**
 * 스터디 그룹 정보
 * @type {StudyGroups}
 */
const study = {
  "2조": {
    tutor: "hyungyu-02",
    members: {
      sh1220: "박성현",
      eungehby: "신보연",
      dododokk: "김도은",
      Nayeon07: "김나연",
    },
  },
  // test, TODO: delete it, 파트장 라벨이 없어 에러 발생 예정
  "파트장": {
    tutor: "nayounsang",
    members: {
        nayounsang: "나윤상",
    }
  }
};

/**
 * study 객체를 순회하여 멤버들의 Map을 생성하는 함수
 * @returns {Map<string, {name: string, group: string}>} GitHub ID를 키로 하고 {name, group} 객체를 값으로 하는 Map
 */
function createMembersMap() {
  const membersMap = new Map();

  for (const [groupName, group] of Object.entries(study)) {
    for (const [githubId, realName] of Object.entries(group.members)) {
      membersMap.set(githubId, {
        name: realName,
        group: groupName,
      });
    }
  }

  return membersMap;
}

module.exports = async ({ github, context }) => {
  const { data: pr } = await github.rest.pulls.get({
    owner: context.repo.owner,
    repo: context.repo.repo,
    pull_number: context.issue.number,
  });
  const membersMap = createMembersMap();

  // PR 작성자의 GitHub ID
  const prAuthor = pr.user.login;
  const memberInfo = membersMap.get(prAuthor);

  if (!memberInfo) {
    console.log(`Member:${prAuthor} is not study member. Exit the action.`);
    return;
  }

  // 라벨 정의
  /** @type {string[]} */
  const labels = [];

  const groupName = memberInfo.group;
  const realName = memberInfo.name;
  labels.push(groupName);
  labels.push(realName);

  // TODO: 기본적으로 "튜터 리뷰 필요"라벨을 달고, 튜터 코멘트가 달리면 라벨 삭제
  const tutor = study[groupName].tutor;

  if (labels.length === 0) {
    console.error("there is no label to add.");
    return;
  }

  try {
    await github.rest.issues.addLabels({
      owner: context.repo.owner,
      repo: context.repo.repo,
      issue_number: context.issue.number,
      labels: labels,
    });
  } catch (error) {
    console.error(`Failed to add labels: ${error}`);
  }
};
