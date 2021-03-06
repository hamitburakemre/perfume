// Code generated by protoc-gen-js-fetch.
// DO NOT EDIT!


export class Entry {
  id: string;
  createdAt: string|number;
  link: string;
  title: string;
  labels: string[];
}

export class GetEntryListReq {
}

export class GetEntryReq {
  id: string;
}

export class EntryListResponse {
  entries: Entry[];
}

export class PerfumeServiceService {
    private host:string;
    private headerEditors :any[]= [];
 /**
  * @param {string} url the service host url
  */
  constructor(url: string) {
    this.host = url;
    this.headerEditors=[];
  }

  addHeaderEditor(m: any) {
    this.headerEditors.push(m)
  }

  async createEntry(entry: Entry): Promise<Entry> {
	const _headers = new Headers();
	_headers.append("Content-Type", "application/json");
	for (let i = 0; i < this.headerEditors.length; ++i) {
	  this.headerEditors[i].edit(_headers);
	}
	const _init = {
	  method: 'POST',
	  headers: _headers,
	  body: JSON.stringify(entry),
	} as RequestInit;
	
	const _req = new Request(`${this.host}/api/v1/entry/create`, _init);
	try {
	  const resp = await fetch(_req);
	  if (resp.status !== 200) {
        const rj = await resp.json();
        return Promise.reject(rj);
      }
	  return resp.json();
	} catch (err) {
	  return Promise.reject(err);
	}
  }

   
  async deleteEntry(entry: Entry): Promise<Entry> {
	const _headers = new Headers();
	_headers.append("Content-Type", "application/json");
	for (let i = 0; i < this.headerEditors.length; ++i) {
	  this.headerEditors[i].edit(_headers);
	}
	const _init = {
	  method: 'PUT',
	  headers: _headers,
	  body: JSON.stringify(entry),
	} as RequestInit;
	
	const _req = new Request(`${this.host}/api/v1/entry/delete`, _init);
	try {
	  const resp = await fetch(_req);
	  if (resp.status !== 200) {
        const rj = await resp.json();
        return Promise.reject(rj);
      }
	  return resp.json();
	} catch (err) {
	  return Promise.reject(err);
	}
  }

   
  async updateEntry(entry: Entry): Promise<Entry> {
	const _headers = new Headers();
	_headers.append("Content-Type", "application/json");
	for (let i = 0; i < this.headerEditors.length; ++i) {
	  this.headerEditors[i].edit(_headers);
	}
	const _init = {
	  method: 'PUT',
	  headers: _headers,
	  body: JSON.stringify(entry),
	} as RequestInit;
	
	const _req = new Request(`${this.host}/api/v1/entry/update`, _init);
	try {
	  const resp = await fetch(_req);
	  if (resp.status !== 200) {
        const rj = await resp.json();
        return Promise.reject(rj);
      }
	  return resp.json();
	} catch (err) {
	  return Promise.reject(err);
	}
  }

   
  async getEntryList(): Promise<EntryListResponse> {
	const _headers = new Headers();
	_headers.append("Content-Type", "application/json");
	for (let i = 0; i < this.headerEditors.length; ++i) {
	  this.headerEditors[i].edit(_headers);
	}
	const _init = {
	  method: 'GET',
	  headers: _headers,
	  body: undefined,
	} as RequestInit;
	
	const _req = new Request(`${this.host}/api/v1/entry/list`, _init);
	try {
	  const resp = await fetch(_req);
	  if (resp.status !== 200) {
        const rj = await resp.json();
        return Promise.reject(rj);
      }
	  return resp.json();
	} catch (err) {
	  return Promise.reject(err);
	}
  }

   
  async getEntry( id: string): Promise<Entry> {
	const _headers = new Headers();
	_headers.append("Content-Type", "application/json");
	for (let i = 0; i < this.headerEditors.length; ++i) {
	  this.headerEditors[i].edit(_headers);
	}
	const _init = {
	  method: 'GET',
	  headers: _headers,
	  body: undefined,
	} as RequestInit;
	
	const _req = new Request(`${this.host}/api/v1/entry/get/${id}`, _init);
	try {
	  const resp = await fetch(_req);
	  if (resp.status !== 200) {
        const rj = await resp.json();
        return Promise.reject(rj);
      }
	  return resp.json();
	} catch (err) {
	  return Promise.reject(err);
	}
  }

   }
