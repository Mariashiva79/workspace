const { JSDOM } = require('jsdom');

const jsdom = new JSDOM('<html><body></body></html>');
global.document = jsdom.window.document;

const { fetch_articles } = require('./ej8index');

describe('fetch_articles', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  it('should update document.body.innerHTML on successful fetch', async () => {
    global.fetch = jest.fn(() => {
      return Promise.resolve({
        status: 200,
        ok: true,
        json: () =>
          Promise.resolve([
            { id: 1, title: 'Title Test 1', body: 'Test Article 1' },
            { id: 2, title: 'Title Test 2', body: 'Test Article 2' },
          ]),
      });
    });
    await fetch_articles();

    expect(document.body.innerHTML).toContain(
      `<h3> Article list length: 2</h3>`
    );
    expect(document.body.innerHTML).toContain(`<li>Title Test 1</li>`);
    expect(document.body.innerHTML).toContain(`<li>Title Test 2</li>`);
    expect(document.body.innerHTML).toContain(`<table>`);
    expect(document.body.innerHTML).toContain(`<td>Title Test 1</td>`);
    expect(document.body.innerHTML).toContain(`<td>Test Article 1</td>`);
    expect(document.body.innerHTML).toContain(`<td>Test Article 2</td>`);
  });

  it('should log status and error on failed fetch', async () => {
    global.fetch = jest.fn(() => {
      return Promise.resolve({
        status: 404,
        ok: false,
      });
    });

    await fetch_articles();
    expect(document.body.innerHTML).toBe(
      `<h1>Error !! 404 can't find article</h1>`
    );
  });
});
