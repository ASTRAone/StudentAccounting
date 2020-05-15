export default class StudentsApi {
    _apiBase = 'https://localhost:5432';

    async getResource (url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
            `, received ${res.status}`)
        }

        return await res.json();
    }

    async getStudentsInfo () {
        const res = await this.getResource(`/`);
        console.log(res);
    }
}