'use strict';

var helpers = require('../../../helpers');

describe('signature partial', function() {
    // TODO: more tests

    it('should include the return type for functions if one is supplied', function() {
        var fakeDoclet = {
            kind: 'function',
            name: 'foo',
            returns: [
                {
                    type: {
                        names: [
                            'string'
                        ]
                    }
                }
            ]
        };
        var returnTypesSeparator = helpers.template.translate('returnTypesSeparator');
        var text = helpers.render('signature', fakeDoclet);

        expect(text).toContain(returnTypesSeparator);
        expect(text).toContain('string');
    });

    it('should not show the return-type separator if there is no return type', function() {
        var fakeDoclet = {
            kind: 'function',
            name: 'foo',
            returns: [
                {
                    description: 'bar'
                }
            ]
        };
        var returnTypesSeparator = helpers.template.translate('returnTypesSeparator');
        var text = helpers.render('signature', fakeDoclet);

        expect(text).not.toContain(returnTypesSeparator);
    });
});
