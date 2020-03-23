
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

let paths;

export default {

    getFromFisebase(cb) {
        if(paths) {
           cb(paths);
           return;
        }
        fb.provinces.on('value', (snapshot) => {
            paths = mapPath(snapshot.val() || [], defaultData);
            cb(paths);
        });
    }
}
