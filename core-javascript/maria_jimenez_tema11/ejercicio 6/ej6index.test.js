const { JSDOM } = require('jsdom');

const jsdom = new JSDOM('<html><body></body></html>');
global.document = jsdom.window.document;

const { fetch_single_article } = require('./ej6index');

describe('fetch_single_article', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
    jest.resetAllMocks();
  });

  it('should update document.body.innerHTML with the exteped article title', async () => {
    console.log = jest.fn();

    await fetch_single_article();

    expect(console.log).toHaveBeenCalledWith('Status 200');
    expect(document.body.innerHTML).toContain(
      '<h5><strong>Título: </strong></h5>sunt aut facere repellat provident occaecati excepturi'
    );
  });

  it('should log status and error on failed fetch', async () => {
    global.fetch = jest.fn(() => {
      return Promise.resolve({
        status: 404,
        ok: false,
      });
    });

    console.log = jest.fn();
    await fetch_single_article();
    expect(console.log).toHaveBeenCalledWith('Error 404');
  });
});
