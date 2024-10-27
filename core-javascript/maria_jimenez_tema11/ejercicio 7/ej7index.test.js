const { JSDOM } = require('jsdom');

const jsdom = new JSDOM('<html><body></body></html>');
global.document = jsdom.window.document;
global.prompt = jest.fn(()=>'5');
const { fetch_article } = require('./ej7index');

describe('fetch_article', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  it('should update document.body.innerHTML on successful fetch', async () => {
    global.fetch = jest.fn(() => {
      return Promise.resolve({
        status: 200,
        ok: true,
        json: () => Promise.resolve({ id: 5, title: 'Test', body: 'Test' }),
      });
    });
    await fetch_article();

    expect(document.body.innerHTML).toContain(
      '<strong>Number of article:</strong> 5 <br> <br> <strong>Title of article:</strong> Test <br> <br> <strong>Article:</strong> <br> <br>Test'
    );
  });

  it('should log status and error on failed fetch', async () => {
    global.fetch = jest.fn(() => {
      return Promise.resolve({
        status: 404,
        ok: false,
      });
    });

    await fetch_article();
    expect(document.body.innerHTML).toBe(
      `<h1>Error !! 404 can't find article</h1>`
    );
  });
});
