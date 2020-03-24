
const fb = require('@/firebaseConfig.js')

const mapPath = (paths, data) => {
    return paths.map((path, index) => {
        path['id'] = "DO-" + (index + 1);
        path['style'] = path.cases > 0 ? data.style : "fill: #66bb6a; stroke: rgb(247, 247, 247); stroke-width: 1.29247px;";
        path['styleFilled'] = data.styleFilled;
        path['hover'] = false;
        return path;
    });
};

const defaultData = {
    styleFilled: "fill: rgb(239, 177, 177); stroke: rgb(247, 247, 247); stroke-width: 1.29247px;",
    style: "fill: rgb(224, 101, 101); stroke: rgb(247, 247, 247); stroke-width: 1.29247px;"
};

export default {

    getFromFisebase(cb) {
        fb.provinces.on('value', (snapshot) => {
            cb(mapPath(snapshot.val() || [], defaultData));
        });
    }
}
