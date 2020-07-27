export const home = (req, res) => res.render("home",  {pageTitle : `Home`});
export const search = (req, res) => res.rander("search",  {pageTitle : `Search`});
export const videos = (req, res) => res.rander("videos",  {pageTitle : `Videos`});
export const upload = (req, res) => res.rander("upload",  {pageTitle : `Upload`});
export const videoDetail = (req, res) => res.rander("videoDetail",  {pageTitle : `Video Detail`});
export const editVideo = (req, res) => res.rander("editVideo",  {pageTitle : `Edit Video`});
export const deleteVideo = (req, res) => res.rander("deleteVideo",  {pageTitle : `Delete Video`});
