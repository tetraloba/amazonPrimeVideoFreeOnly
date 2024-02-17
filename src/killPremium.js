
const options = {
    childList: true,
    attributes: false,
    subtree: false,
}
function remove_premiums(mutationsList, observer){
    console.log('call_back関数 remove_premiums()が呼び出されました')
    let listToRemove = [];
    for (const recommend of recommends) {
        if (recommend.classList.contains("+OSZzQ")) {
            if (recommend.firstChild.firstChild.firstChild.firstChild.firstChild.classList.contains("o86fri")) {
                listToRemove.push(recommend);
            }
        }
    }
    for (const contentToRemove of listToRemove) {
        contentToRemove.remove();
    }
}

let main_elem = document.getElementsByTagName("main")[0];
let recommends_parent = main_elem.firstChild;
let recommends = recommends_parent.children;
if (!recommends_parent) {
    console.error('recommends_parentの取得に失敗しました');
}

const obs_recommends = new MutationObserver(remove_premiums);
console.log('test: recommendsの監視を開始します');
obs_recommends.observe(recommends_parent, options)
console.log('test: scriptの最終行です');
