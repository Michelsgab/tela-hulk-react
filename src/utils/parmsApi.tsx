import md5 from "md5";

export function parmsApi() {
    const apiKey = import.meta.env.VITE_PUBLIC_KEY
    const privateKey = import.meta.env.VITE_PRIVATE_KEY
    const ts = new Date().getTime()
    const hash = md5(`${ts}${privateKey}${apiKey}`)
    return {
        apiKey,
        ts,
        hash,
    }
}