import api from "./api";

const  gets = async () => {
    return await api.fetchCollection('/wp-json/wp/v2/posts?_embed');
};

export {
    gets
}
