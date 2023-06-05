// import { subscribe } from "../../../store/store";
import { fetchActionCreator } from "../../../actions/mediaActions";
import { store } from "../../../store/store";
import { createComponent } from "../../../utils/createDOM";

export function createGridAll() {
  const $gridContainer = createComponent({
    tagName: "ul",
    attributes: { className: "media__grid--container" },
  });

  const $grid = createComponent({
    tagName: "div",
    attributes: { className: "media__grid" },
  });

  $grid.append($gridContainer);
  return $grid;
}

// 초기 렌더링
// 버튼을 누르면 이곳이 업데이트 돼야함
// export function renderItem(){}

export async function grid() {
  await fetchActionCreator.fetchGridData();

  const $grid = createGridAll();
  // subscribe();
  // const allData = store.getState().mediaData.data;
  const allData = store.getState().mediaData.data;

  console.log(allData);

  return $grid;
}