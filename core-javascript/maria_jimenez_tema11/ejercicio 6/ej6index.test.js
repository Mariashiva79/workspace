const { JSDOM } = require('jsdom');

const jsdom = new JSDOM('<html><body></body></html>');
global.document = jsdom.window.document;

const { fetch_single_article } = require('./ej6index');

describe('fetch_single_article', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  it('should update document.body.innerHTML on successful fetch', async () => {
    global.fetch = jest.fn(() => {
      return Promise.resolve({
        status: 200,
        ok: true,
        json: () => Promise.resolve({ title: 'Test', body: 'Test' }),
      });
    });
    await fetch_single_article();

    expect(document.body.innerHTML).toContain(
      '<h5><strong>Título: </strong></h5>Test <br> <br> <h5><strong>Artículo: </strong></h5>Test'
    );
  });

  it('should log status and error on failed fetch', async () => {
    global.fetch = jest.fn(() => {
      return Promise.resolve({
        status: 404,
        ok: false,
      });
    });

    console.error = jest.fn();
    await fetch_single_article();
    expect(console.error).toHaveBeenCalledWith('Error 404');
  });
});
