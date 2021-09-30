class CameraData {
    private _data: any;
    constructor(data: any) {
        this._data = data;
    }

    public get data() {
        return this._data;
    }

    public set data(data: any) {
        this._data = data;
    }
}

export { CameraData };