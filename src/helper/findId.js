export const findId = async request => {
    const { nextUrl: { search } } = request;
    const urlSearchParams = new URLSearchParams(search);
    const { id } = Object.fromEntries(urlSearchParams.entries());
    return id;
}