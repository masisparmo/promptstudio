function a0_0x38c0(_0x13f2ed, _0x4045ca) {
    _0x13f2ed = _0x13f2ed - 0x120;
    const _0x5f189f = a0_0x5f18();
    let _0x38c03a = _0x5f189f[_0x13f2ed];
    return _0x38c03a;
}
const a0_0x2c72f9 = a0_0x38c0;
(function (_0x43251c, _0x24c3cf) {
    const _0x48cc9a = a0_0x38c0, _0x5b4658 = _0x43251c();
    while (!![]) {
        try {
            const _0x19b3fe = -parseInt(_0x48cc9a(0x19e)) / 0x1 * (parseInt(_0x48cc9a(0x3f5)) / 0x2) + parseInt(_0x48cc9a(0x12b)) / 0x3 + -parseInt(_0x48cc9a(0x3d2)) / 0x4 * (parseInt(_0x48cc9a(0x2fc)) / 0x5) + -parseInt(_0x48cc9a(0x161)) / 0x6 + -parseInt(_0x48cc9a(0x2d3)) / 0x7 * (parseInt(_0x48cc9a(0x219)) / 0x8) + -parseInt(_0x48cc9a(0x2f1)) / 0x9 * (parseInt(_0x48cc9a(0x252)) / 0xa) + parseInt(_0x48cc9a(0x33d)) / 0xb * (parseInt(_0x48cc9a(0x33e)) / 0xc);
            if (_0x19b3fe === _0x24c3cf)
                break;
            else
                _0x5b4658['push'](_0x5b4658['shift']());
        } catch (_0x306627) {
            _0x5b4658['push'](_0x5b4658['shift']());
        }
    }
}(a0_0x5f18, 0xf0111));
function formatLyrics(_0x3d4d6d) {
    const _0x1cba26 = a0_0x38c0;
    if (!_0x3d4d6d)
        return '';
    return _0x3d4d6d[_0x1cba26(0x385)](/\\n/g, '\x0a')[_0x1cba26(0x385)](/^"|"$/g, '');
}
document[a0_0x2c72f9(0x416)]('DOMContentLoaded', () => {
    const _0x526209 = a0_0x2c72f9;
    let _0x597f8b;
    const _0x332d30 = indexedDB[_0x526209(0x3a0)](_0x526209(0x1e3), 0x1);
    _0x332d30[_0x526209(0x401)] = _0x4b1452 => {
        const _0x22d25e = _0x526209, _0x4e3695 = _0x4b1452[_0x22d25e(0x3ae)]['result'];
        !_0x4e3695[_0x22d25e(0x19d)][_0x22d25e(0x13a)]('prompts') && _0x4e3695[_0x22d25e(0x317)](_0x22d25e(0x2ee), {
            'keyPath': 'id',
            'autoIncrement': !![]
        });
    }, _0x332d30[_0x526209(0x1c0)] = _0x4294f5 => {
        const _0x29bbfb = _0x526209;
        _0x597f8b = _0x4294f5[_0x29bbfb(0x3ae)][_0x29bbfb(0x3e1)], console['log']('Database\x20\x27PromptStudioDB\x27\x20opened\x20successfully.');
    }, _0x332d30[_0x526209(0x3b2)] = _0x255d89 => {
        const _0x5b662d = _0x526209;
        console[_0x5b662d(0x318)](_0x5b662d(0x3b9), _0x255d89['target']['errorCode']);
    };
    let _0x287814 = localStorage[_0x526209(0x3f2)](_0x526209(0x2ab)), _0x3526ae = null, _0x58b497 = null, _0x42471b = null, _0x47d8f9 = null, _0x101ab1 = null, _0x134009 = null, _0x4c66a1 = '1:1';
    const _0x5615c8 = {
        'mainApp': document[_0x526209(0x3ee)]('main-app'),
        'assistantButton': document[_0x526209(0x3ee)](_0x526209(0x263)),
        'settingsButton': document[_0x526209(0x3ee)](_0x526209(0x375)),
        'themeToggle': document[_0x526209(0x3ee)](_0x526209(0x411)),
        'lightIcon': document['getElementById'](_0x526209(0x30c)),
        'darkIcon': document[_0x526209(0x3ee)](_0x526209(0x166)),
        'apiKeyModal': document[_0x526209(0x3ee)](_0x526209(0x2fe)),
        'modalApiKeyInput': document[_0x526209(0x3ee)](_0x526209(0x141)),
        'saveApiKeyBtn': document[_0x526209(0x3ee)]('save-api-key-btn'),
        'deleteApiKeyBtn': document[_0x526209(0x3ee)]('delete-api-key-btn'),
        'closeApiKeyModal': document[_0x526209(0x3ee)](_0x526209(0x25b)),
        'mainTabButtons': {
            'belajar': document['getElementById'](_0x526209(0x124)),
            'desainer': document[_0x526209(0x3ee)](_0x526209(0x2f5)),
            'riwayat': document[_0x526209(0x3ee)](_0x526209(0x1f5))
        },
        'contentSections': {
            'belajar': document[_0x526209(0x3ee)](_0x526209(0x303)),
            'desainer': document[_0x526209(0x3ee)](_0x526209(0x246)),
            'riwayat': document[_0x526209(0x3ee)](_0x526209(0x3bf))
        },
        'designerTabImage': document[_0x526209(0x3ee)]('designer-tab-image'),
        'designerTabVideo': document[_0x526209(0x3ee)](_0x526209(0x3b0)),
        'designerTabLagu': document[_0x526209(0x3ee)](_0x526209(0x33c)),
        'imageForm': document[_0x526209(0x3ee)](_0x526209(0x403)),
        'videoForm': document['getElementById']('video-designer-form'),
        'laguForm': document[_0x526209(0x3ee)](_0x526209(0x1d8)),
        'outputPromptEl': document[_0x526209(0x3ee)](_0x526209(0x1e0)),
        'copyButton': document[_0x526209(0x3ee)](_0x526209(0x1c8)),
        'standardImageForm': document[_0x526209(0x3ee)](_0x526209(0x35c)),
        'tujuanGambarContainer': document[_0x526209(0x3ee)](_0x526209(0x351)),
        'tujuanGambarEl': document['getElementById']('tujuan-gambar'),
        'kemasanContainerEl': document[_0x526209(0x3ee)](_0x526209(0x18c)),
        'jenisKemasanEl': document[_0x526209(0x3ee)](_0x526209(0x2bf)),
        'produkGambarEl': document[_0x526209(0x3ee)]('produk-gambar'),
        'gayaGambarEl': document['getElementById']('gaya-gambar'),
        'latarBelakangGambarEl': document[_0x526209(0x3ee)](_0x526209(0x131)),
        'detailGambarEl': document[_0x526209(0x3ee)](_0x526209(0x331)),
        'produkGambarLabelText': document[_0x526209(0x3ee)]('produk-gambar-label-text'),
        'gayaGambarLabelText': document[_0x526209(0x3ee)]('gaya-gambar-label-text'),
        'detailGambarLabelText': document['getElementById'](_0x526209(0x309)),
        'singleUploadContainer': document['getElementById'](_0x526209(0x13e)),
        'uploadLabel': document[_0x526209(0x3ee)](_0x526209(0x413)),
        'imageCompositionForm': document[_0x526209(0x3ee)](_0x526209(0x273)),
        'compositionDetailsEl': document[_0x526209(0x3ee)](_0x526209(0x28a)),
        'compositionPreviewContainer': document['getElementById'](_0x526209(0x1f6)),
        'backToTujuanButton': document[_0x526209(0x3ee)](_0x526209(0x210)),
        'characterCreatorForm': document['getElementById'](_0x526209(0x1d0)),
        'backToTujuanButtonChar': document[_0x526209(0x3ee)](_0x526209(0x3de)),
        'charNameEl': document[_0x526209(0x3ee)](_0x526209(0x1b8)),
        'charPhysicEl': document[_0x526209(0x3ee)](_0x526209(0x2e6)),
        'charAttireEl': document[_0x526209(0x3ee)](_0x526209(0x245)),
        'charStyleEl': document[_0x526209(0x3ee)](_0x526209(0x13c)),
        'characterOutputSection': document[_0x526209(0x3ee)](_0x526209(0x27e)),
        'characterSheetOutputEl': document[_0x526209(0x3ee)](_0x526209(0x322)),
        'characterScenarioInputEl': document[_0x526209(0x3ee)](_0x526209(0x337)),
        'subjekVideoSubjectEl': document[_0x526209(0x3ee)](_0x526209(0x3f8)),
        'subjekVideoActionEl': document[_0x526209(0x3ee)](_0x526209(0x307)),
        'latarBelakangVideoEl': document['getElementById'](_0x526209(0x3d6)),
        'gayaVideoEl': document[_0x526209(0x3ee)](_0x526209(0x41a)),
        'audioVideoEl': document['getElementById']('audio-video'),
        'negatifVideoEl': document[_0x526209(0x3ee)](_0x526209(0x294)),
        'allFormInputs': document[_0x526209(0x3bc)]('.form-input:not(#output-prompt):not(#character-sheet-output):not(#image-analysis-result):not(#video-image-analysis-result),\x20.form-select'),
        'enhanceButton': document[_0x526209(0x3ee)]('enhance-prompt-button'),
        'finalPromptContainer': document[_0x526209(0x3ee)](_0x526209(0x3c8)),
        'imageUploadEl': document['getElementById'](_0x526209(0x22d)),
        'dropZone': document[_0x526209(0x3ee)](_0x526209(0x3be)),
        'imagePreviewContainer': document[_0x526209(0x3ee)](_0x526209(0x23a)),
        'uploadedImagePreview': document[_0x526209(0x3ee)](_0x526209(0x1ba)),
        'analyzeImageButton': document[_0x526209(0x3ee)](_0x526209(0x2fd)),
        'analyzeImageText': document[_0x526209(0x3ee)](_0x526209(0x400)),
        'analyzeImageIcon': document['getElementById'](_0x526209(0x36d)),
        'imageAnalysisResult': document[_0x526209(0x3ee)]('image-analysis-result'),
        'removeImageButton': document[_0x526209(0x3ee)](_0x526209(0x224)),
        'imageUploadCompose1': document[_0x526209(0x3ee)](_0x526209(0x325)),
        'dropZoneCompose1': document[_0x526209(0x3ee)](_0x526209(0x1dc)),
        'uploadedComposePreview1': document[_0x526209(0x3ee)]('uploaded-compose-preview-1'),
        'removeCompose1': document[_0x526209(0x3ee)]('remove-compose-1'),
        'imageUploadCompose2': document[_0x526209(0x3ee)]('image-upload-compose-2'),
        'dropZoneCompose2': document[_0x526209(0x3ee)](_0x526209(0x42a)),
        'uploadedComposePreview2': document[_0x526209(0x3ee)](_0x526209(0x30b)),
        'removeCompose2': document[_0x526209(0x3ee)]('remove-compose-2'),
        'imageUploadChar': document[_0x526209(0x3ee)](_0x526209(0x3ec)),
        'dropZoneChar': document[_0x526209(0x3ee)](_0x526209(0x32e)),
        'characterPreviewContainer': document[_0x526209(0x3ee)](_0x526209(0x41e)),
        'uploadedCharPreview': document[_0x526209(0x3ee)]('uploaded-char-preview'),
        'removeCharImageButton': document[_0x526209(0x3ee)](_0x526209(0x1c4)),
        'analyzeCharButton': document[_0x526209(0x3ee)](_0x526209(0x2e8)),
        'analyzeCharText': document[_0x526209(0x3ee)](_0x526209(0x171)),
        'analyzeCharIcon': document[_0x526209(0x3ee)]('analyze-char-icon'),
        'imageUploadVideoEl': document[_0x526209(0x3ee)]('image-upload-video'),
        'dropZoneVideo': document[_0x526209(0x3ee)](_0x526209(0x1fd)),
        'videoPreviewContainer': document[_0x526209(0x3ee)](_0x526209(0x29b)),
        'uploadedVideoPreview': document['getElementById']('uploaded-video-preview'),
        'removeVideoButton': document[_0x526209(0x3ee)](_0x526209(0x324)),
        'analyzeVideoImageButton': document[_0x526209(0x3ee)](_0x526209(0x20d)),
        'analyzeVideoImageText': document[_0x526209(0x3ee)](_0x526209(0x187)),
        'analyzeVideoImageIcon': document[_0x526209(0x3ee)](_0x526209(0x1bd)),
        'videoImageAnalysisResult': document['getElementById'](_0x526209(0x241)),
        'aspectRatioContainer': document[_0x526209(0x3ee)](_0x526209(0x42e)),
        'aspectRatioDropdown': document['getElementById'](_0x526209(0x3e8)),
        'aspectRatioButton': document[_0x526209(0x3ee)](_0x526209(0x1ea)),
        'aspectRatioMenu': document[_0x526209(0x3ee)]('aspect-ratio-menu'),
        'aspectRatioOptions': document[_0x526209(0x3bc)](_0x526209(0x3c0)),
        'assistantModal': document['getElementById'](_0x526209(0x2b9)),
        'closeAssistantModal': document[_0x526209(0x3ee)]('close-assistant-modal'),
        'assistantChatBody': document[_0x526209(0x3ee)](_0x526209(0x421)),
        'assistantInput': document[_0x526209(0x3ee)](_0x526209(0x39b)),
        'sendAssistantMessage': document[_0x526209(0x3ee)](_0x526209(0x226)),
        'showJsonButton': document['getElementById']('show-json-button'),
        'jsonOutputContainer': document[_0x526209(0x3ee)](_0x526209(0x300)),
        'jsonOutputPrompt': document[_0x526209(0x3ee)](_0x526209(0x190)),
        'copyJsonButton': document['getElementById'](_0x526209(0x1f8)),
        'clearAllButton': document[_0x526209(0x3ee)](_0x526209(0x201)),
        'laguOutputSection': document[_0x526209(0x3ee)](_0x526209(0x383)),
        'buatPromptLaguButton': document[_0x526209(0x3ee)]('buat-prompt-lagu-button'),
        'outputLirik': document[_0x526209(0x3ee)]('output-lirik'),
        'copyLirikButton': document[_0x526209(0x3ee)]('copy-lirik-button'),
        'outputGaya': document[_0x526209(0x3ee)](_0x526209(0x32b)),
        'copyGayaButton': document[_0x526209(0x3ee)](_0x526209(0x419)),
        'judulLaguList': document[_0x526209(0x3ee)]('judul-lagu-list'),
        'regenLirikButton': document[_0x526209(0x3ee)](_0x526209(0x25c)),
        'regenGayaButton': document[_0x526209(0x3ee)](_0x526209(0x3cd)),
        'regenJudulButton': document['getElementById']('regen-judul-button'),
        'outputAlternatif': document[_0x526209(0x3ee)](_0x526209(0x153)),
        'regenAlternatifButton': document[_0x526209(0x3ee)]('regen-alternatif-button'),
        'copyAlternatifButton': document['getElementById'](_0x526209(0x195)),
        'genreUtamaSearch': document[_0x526209(0x3ee)](_0x526209(0x36c)),
        'genreUtamaResults': document[_0x526209(0x3ee)](_0x526209(0x361)),
        'genreKombinasiSearch': document[_0x526209(0x3ee)](_0x526209(0x297)),
        'genreKombinasiResults': document[_0x526209(0x3ee)]('genre-kombinasi-results'),
        'importFromImageBtn': document[_0x526209(0x3ee)](_0x526209(0x376)),
        'savePromptButton': document[_0x526209(0x3ee)]('save-prompt-button'),
        'saveLaguPromptButton': document[_0x526209(0x3ee)](_0x526209(0x1d3)),
        'promptHistoryList': document[_0x526209(0x3ee)](_0x526209(0x270)),
        'exportPromptsButton': document['getElementById'](_0x526209(0x399)),
        'importPromptsInput': document['getElementById']('import-prompts-input'),
        'previewModal': document['getElementById'](_0x526209(0x2e2)),
        'closePreviewModal': document[_0x526209(0x3ee)](_0x526209(0x247)),
        'closePreviewBtnSecondary': document['getElementById'](_0x526209(0x214)),
        'previewModalBody': document['getElementById'](_0x526209(0x391)),
        'usePreviewBtn': document['getElementById'](_0x526209(0x284)),
        'audioUpload': document[_0x526209(0x3ee)](_0x526209(0x287))
    };
    function _0x243f87(_0x54b8c2 = []) {
        const _0x27fad5 = _0x526209;
        _0x5615c8[_0x27fad5(0x24f)][_0x27fad5(0x254)] = '';
        if (_0x54b8c2[_0x27fad5(0x315)] === 0x0)
            for (let _0x3c80b2 = 0x0; _0x3c80b2 < 0x5; _0x3c80b2++) {
                _0x54b8c2[_0x27fad5(0x362)](_0x27fad5(0x24e) + (_0x3c80b2 + 0x1));
            }
        _0x54b8c2[_0x27fad5(0x232)](_0x14d21f => {
            const _0x363162 = _0x27fad5, _0x51872a = document[_0x363162(0x2b3)](_0x363162(0x38f));
            _0x51872a[_0x363162(0x282)] = _0x363162(0x430);
            const _0x3d994b = document[_0x363162(0x2b3)](_0x363162(0x3e0));
            _0x3d994b[_0x363162(0x2ca)] = 'text', _0x3d994b['value'] = _0x14d21f, _0x3d994b['className'] = _0x363162(0x1ec);
            const _0x398550 = document['createElement'](_0x363162(0x39d));
            _0x398550[_0x363162(0x25e)] = _0x363162(0x3f9), _0x398550['className'] = 'absolute\x20right-2\x20top-1/2\x20-translate-y-1/2\x20btn\x20btn-secondary\x20px-2\x20py-1\x20text-xs', _0x398550[_0x363162(0x21f)] = () => {
                const _0x5a1b46 = _0x363162;
                _0x3d994b[_0x5a1b46(0x3a4)]();
                try {
                    document[_0x5a1b46(0x268)]('copy'), _0x398550[_0x5a1b46(0x25e)] = _0x5a1b46(0x13d), setTimeout(() => {
                        _0x398550['textContent'] = 'SALIN';
                    }, 0x7d0);
                } catch (_0xe585e0) {
                    _0x398550[_0x5a1b46(0x25e)] = 'GAGAL';
                }
            }, _0x51872a[_0x363162(0x1cd)](_0x3d994b), _0x51872a[_0x363162(0x1cd)](_0x398550), _0x5615c8['judulLaguList'][_0x363162(0x1cd)](_0x51872a);
        });
    }
    const _0x5f14a7 = _0x218494 => {
        const _0xde6bd1 = _0x526209;
        _0x218494 === _0xde6bd1(0x206) ? (document['documentElement']['classList'][_0xde6bd1(0x3ea)](_0xde6bd1(0x206)), _0x5615c8[_0xde6bd1(0x3a1)][_0xde6bd1(0x389)][_0xde6bd1(0x3ea)](_0xde6bd1(0x1f3)), _0x5615c8[_0xde6bd1(0x1bc)]['classList'][_0xde6bd1(0x3e6)](_0xde6bd1(0x1f3))) : (document[_0xde6bd1(0x332)][_0xde6bd1(0x389)][_0xde6bd1(0x3e6)](_0xde6bd1(0x206)), _0x5615c8[_0xde6bd1(0x3a1)][_0xde6bd1(0x389)]['remove'](_0xde6bd1(0x1f3)), _0x5615c8[_0xde6bd1(0x1bc)]['classList'][_0xde6bd1(0x3ea)](_0xde6bd1(0x1f3)));
    };
    function _0x31d52e(_0x1e325d, _0x1efd2b = null) {
        const _0x369a67 = _0x526209, _0x549a23 = _0x5615c8['apiKeyModal'], _0xcfca67 = _0x549a23['querySelector'](_0x369a67(0x38f));
        _0x1e325d ? (_0x287814 ? (_0x5615c8[_0x369a67(0x26c)][_0x369a67(0x122)] = _0x287814, _0x5615c8['deleteApiKeyBtn'][_0x369a67(0x389)][_0x369a67(0x3e6)](_0x369a67(0x1f3))) : (_0x5615c8[_0x369a67(0x26c)][_0x369a67(0x122)] = '', _0x5615c8[_0x369a67(0x23c)][_0x369a67(0x389)]['add'](_0x369a67(0x1f3))), _0x549a23[_0x369a67(0x389)][_0x369a67(0x3e6)](_0x369a67(0x1f3)), void _0x549a23[_0x369a67(0x3dd)], _0x549a23['classList']['remove'](_0x369a67(0x266)), _0xcfca67[_0x369a67(0x389)][_0x369a67(0x3e6)](_0x369a67(0x3da)), _0xcfca67[_0x369a67(0x389)]['add'](_0x369a67(0x1e9)), _0x549a23[_0x369a67(0x316)][_0x369a67(0x30f)] = _0x1efd2b || '') : (_0x549a23[_0x369a67(0x389)]['add']('opacity-0'), _0xcfca67[_0x369a67(0x389)][_0x369a67(0x3e6)](_0x369a67(0x1e9)), _0xcfca67['classList'][_0x369a67(0x3ea)](_0x369a67(0x3da)), setTimeout(() => {
            const _0xe90711 = _0x369a67;
            _0x549a23[_0xe90711(0x389)][_0xe90711(0x3ea)]('hidden');
        }, 0x12c));
    }
    function _0x364b68(_0xe15706) {
        const _0x3ff459 = _0x526209;
        if (_0x287814)
            return !![];
        return _0x31d52e(!![], _0xe15706 === _0x3ff459(0x2f5) ? 'desainer' : _0xe15706), ![];
    }
    function _0x5cd723(_0x3a5693) {
        const _0x3c2e6d = _0x526209;
        if (_0x3a5693 === 'desainer' && !_0x364b68('tab-desainer'))
            return;
        Object['values'](_0x5615c8[_0x3c2e6d(0x1a5)])[_0x3c2e6d(0x232)](_0x26e61c => _0x26e61c[_0x3c2e6d(0x389)][_0x3c2e6d(0x3e6)](_0x3c2e6d(0x394))), _0x5615c8['mainTabButtons'][_0x3a5693][_0x3c2e6d(0x389)][_0x3c2e6d(0x3ea)](_0x3c2e6d(0x394)), Object[_0x3c2e6d(0x2df)](_0x5615c8['contentSections'])[_0x3c2e6d(0x232)](_0x2ce609 => _0x2ce609[_0x3c2e6d(0x389)][_0x3c2e6d(0x3e6)](_0x3c2e6d(0x394))), _0x5615c8[_0x3c2e6d(0x200)][_0x3a5693][_0x3c2e6d(0x389)]['add'](_0x3c2e6d(0x394)), _0x3a5693 === _0x3c2e6d(0x2f0) && _0x1b7e2d();
    }
    const _0x34a951 = {
            'MODERN\x20POP,\x20R&B,\x20&\x20HIP-HOP': [
                _0x526209(0x36f),
                _0x526209(0x3cf),
                _0x526209(0x39a),
                'R&B\x20Kontemporer\x20–\x20Vokal\x20soulful,\x20beat\x20trap/hip-hop\x20(SZA,\x20Frank\x20Ocean)',
                _0x526209(0x34e),
                _0x526209(0x129),
                'Boom\x20Bap\x20/\x20Old\x20School\x20Hip-Hop\x20–\x20Drum\x20break\x20klasik,\x20lirik\x20fokus\x20(Nas,\x20A\x20Tribe\x20Called\x20Quest)',
                _0x526209(0x40d),
                'Lo-Fi\x20Hip-Hop\x20–\x20Santai,\x20instrumental,\x20fokus\x20pada\x20mood\x20(Nujabes,\x20J\x20Dilla)',
                _0x526209(0x189)
            ],
            'ROCK\x20&\x20ALTERNATIF': [
                'Classic\x20Rock\x20–\x20Gitar\x20elektrik,\x20blues-based\x20(Led\x20Zeppelin,\x20AC/DC)',
                _0x526209(0x17f),
                _0x526209(0x191),
                _0x526209(0x319),
                'Pop\x20Punk\x20–\x20Energi\x20punk,\x20melodi\x20pop\x20(Blink-182,\x20Green\x20Day)',
                _0x526209(0x2bb),
                _0x526209(0x2a5),
                _0x526209(0x1ed),
                _0x526209(0x412),
                'Folk\x20Rock\x20–\x20Instrumen\x20akustik\x20dan\x20lirik\x20naratif\x20(Bob\x20Dylan,\x20Fleet\x20Foxes)'
            ],
            'ELEKTRONIK\x20&\x20DANCE': [
                _0x526209(0x386),
                _0x526209(0x239),
                _0x526209(0x163),
                'Drum\x20&\x20Bass\x20–\x20Tempo\x20cepat\x20(160-180\x20BPM),\x20breakbeat\x20kompleks\x20(Pendulum,\x20Goldie)',
                _0x526209(0x3fa),
                'UK\x20Garage\x20–\x20Ritme\x20sinkopasi,\x20vokal\x20soulful\x20(Craig\x20David,\x20Artful\x20Dodger)',
                _0x526209(0x2e0),
                _0x526209(0x1ef),
                _0x526209(0x2fb),
                'Future\x20Bass\x20–\x20Drop\x20melodik,\x20synth\x20‘wobbly’\x20(Flume,\x20Illenium)'
            ],
            'VIBE\x20CERIA\x20&\x20ENERGIS': [
                _0x526209(0x2d6),
                'Tropical\x20House\x20–\x20Nuansa\x20pantai,\x20santai\x20tapi\x20energik\x20(Kygo\x20–\x20Firestone)',
                'Funky\x20Disco\x20Pop\x20–\x20Groovy,\x20bass\x20menonjol,\x20retro-modern\x20(Dua\x20Lipa\x20–\x20Levitating)',
                _0x526209(0x2a0),
                'Latin\x20Dance\x20/\x20Reggaeton\x20–\x20Ritme\x20sensual\x20dan\x20penuh\x20gerak\x20(Bad\x20Bunny,\x20J\x20Balvin)',
                _0x526209(0x2d1),
                _0x526209(0x38d),
                _0x526209(0x175),
                _0x526209(0x41f),
                _0x526209(0x178)
            ],
            'CHILL,\x20ROMANTIS\x20&\x20DREAMY': [
                _0x526209(0x227),
                _0x526209(0x2a6),
                'Acoustic\x20Love\x20Song\x20–\x20Gitar\x20lembut,\x20vokal\x20hangat\x20(Ed\x20Sheeran\x20–\x20Perfect)',
                _0x526209(0x160),
                _0x526209(0x295),
                'Ambient\x20Piano\x20/\x20Neo-Classical\x20–\x20Minimalis\x20dan\x20menenangkan\x20(Ólafur\x20Arnalds)',
                _0x526209(0x185),
                _0x526209(0x1ad),
                _0x526209(0x336),
                _0x526209(0x395)
            ],
            'VIBE\x20PENUH\x20SEMANGAT\x20&\x20MOTIVATIF': [
                _0x526209(0x404),
                _0x526209(0x381),
                'Epic\x20Orchestral\x20Hybrid\x20–\x20Musik\x20sinematik\x20dan\x20heroik\x20(Two\x20Steps\x20from\x20Hell)',
                _0x526209(0x18d),
                _0x526209(0x2de),
                _0x526209(0x396),
                'Pop\x20Punk\x20Revival\x20–\x20Energi\x20remaja\x20dan\x20semangat\x20bebas\x20(Avril\x20Lavigne,\x20Blink-182)',
                _0x526209(0x1eb),
                _0x526209(0x409),
                'Folk\x20Empowerment\x20–\x20Akustik\x20dan\x20lirik\x20optimis\x20(Mumford\x20&\x20Sons,\x20Of\x20Monsters\x20and\x20Men)'
            ],
            'ETNIK\x20&\x20TRADISIONAL\x20DUNIA': [
                _0x526209(0x2b2),
                'Gamelan\x20(Indonesia\x20/\x20Bali\x20/\x20Jawa)\x20–\x20Instrumen\x20perunggu\x20dan\x20ritme\x20kompleks',
                _0x526209(0x2c6),
                _0x526209(0x221),
                'Enka\x20(Jepang)\x20–\x20Lagu\x20sentimental\x20tradisional\x20Jepang',
                _0x526209(0x12a),
                _0x526209(0x366),
                _0x526209(0x280),
                'Arab\x20Pop\x20/\x20Khaleeji\x20/\x20Rai\x20–\x20Musik\x20Timur\x20Tengah\x20modern\x20&\x20tradisional',
                'Flamenco\x20(Spanyol)\x20–\x20Gitar,\x20tepukan,\x20dan\x20vokal\x20penuh\x20emosi',
                _0x526209(0x3a9),
                _0x526209(0x13b),
                _0x526209(0x344),
                'Tango\x20(Argentina)\x20–\x20Musik\x20dansa\x20dramatis\x20dan\x20romantis',
                _0x526209(0x23f),
                'Celtic\x20Folk\x20(Irlandia\x20/\x20Skotlandia)\x20–\x20Seruling,\x20biola,\x20dan\x20ritme\x20tarian',
                _0x526209(0x1be),
                _0x526209(0x2a1),
                _0x526209(0x347),
                _0x526209(0x15d),
                _0x526209(0x1da),
                _0x526209(0x3e9),
                _0x526209(0x198),
                'Polynesian\x20/\x20Hula\x20/\x20Maori\x20Music\x20–\x20Vokal\x20dan\x20perkusi\x20khas\x20kepulauan\x20Pasifik',
                _0x526209(0x1fc),
                _0x526209(0x12f),
                _0x526209(0x136),
                _0x526209(0x19b),
                _0x526209(0x42d),
                'Afro-Cuban\x20/\x20Salsa\x20Tradisional\x20–\x20Ritme\x20perkusi\x20Latin\x20kuat'
            ]
        }, _0x9129b9 = {
            'Alat\x20Musik\x20Dawai\x20(String\x20Instruments)': [
                _0x526209(0x255),
                _0x526209(0x312),
                _0x526209(0x349),
                _0x526209(0x1ac),
                _0x526209(0x1c2),
                _0x526209(0x2c7),
                _0x526209(0x353)
            ],
            'Alat\x20Musik\x20Tuts\x20(Keyboard\x20Instruments)': [
                _0x526209(0x305),
                'Organ',
                _0x526209(0x2f9),
                _0x526209(0x17e),
                _0x526209(0x3f6)
            ],
            'Alat\x20Musik\x20Perkusi\x20(Percussion\x20Instruments)': [
                _0x526209(0x2cb),
                _0x526209(0x28d),
                _0x526209(0x179),
                _0x526209(0x330),
                _0x526209(0x260),
                _0x526209(0x26d),
                _0x526209(0x3c5),
                'Taiko\x20(Jepang)',
                _0x526209(0x1af)
            ],
            'Alat\x20Musik\x20Tiup\x20(Wind\x20Instruments)': [
                _0x526209(0x1d2),
                _0x526209(0x229),
                _0x526209(0x258),
                'Oboe',
                'Bassoon',
                _0x526209(0x18a),
                'Trombone',
                _0x526209(0x14f),
                'Tuba'
            ],
            'Alat\x20Musik\x20Elektronik\x20&\x20Digital': [
                _0x526209(0x1ae),
                _0x526209(0x3e4),
                _0x526209(0x329),
                _0x526209(0x135)
            ],
            'Alat\x20Musik\x20Tradisional\x20&\x20Etnik\x20Dunia\x20(World\x20Instruments)': [
                'Gamelan\x20(Indonesia)',
                _0x526209(0x3ac),
                _0x526209(0x22e),
                'Accordion\x20(Eropa)',
                _0x526209(0x424),
                _0x526209(0x14e),
                _0x526209(0x348),
                _0x526209(0x3b5),
                _0x526209(0x3f4)
            ]
        };
    function _0x101d07(_0x214faf, _0x11f1fd) {
        const _0x391ce1 = _0x526209, _0x4eaac6 = Object[_0x391ce1(0x2df)](_0x34a951)[_0x391ce1(0x341)](), _0x211e10 = (_0x126fa4 = '') => {
                const _0x58dbf9 = _0x391ce1;
                _0x11f1fd[_0x58dbf9(0x254)] = '';
                const _0x111a03 = _0x4eaac6[_0x58dbf9(0x182)](_0xdb6fc6 => _0xdb6fc6['toLowerCase']()[_0x58dbf9(0x17b)](_0x126fa4[_0x58dbf9(0x12c)]()));
                if (_0x111a03[_0x58dbf9(0x315)] === 0x0 && _0x126fa4) {
                    const _0x21002a = document[_0x58dbf9(0x2b3)](_0x58dbf9(0x38f));
                    _0x21002a[_0x58dbf9(0x25e)] = _0x58dbf9(0x342) + _0x126fa4 + '\x22', _0x21002a[_0x58dbf9(0x282)] = 'p-2\x20text-secondary\x20italic', _0x11f1fd[_0x58dbf9(0x1cd)](_0x21002a);
                } else {
                    const _0xa8d5b3 = _0x126fa4 ? _0x111a03 : _0x4eaac6;
                    _0xa8d5b3['forEach'](_0x83d7ab => {
                        const _0x191a01 = _0x58dbf9, _0x175495 = document[_0x191a01(0x2b3)](_0x191a01(0x38f));
                        _0x175495[_0x191a01(0x25e)] = _0x83d7ab, _0x175495[_0x191a01(0x282)] = _0x191a01(0x38a), _0x175495[_0x191a01(0x416)](_0x191a01(0x3a7), () => {
                            const _0x3f71fb = _0x191a01;
                            _0x214faf[_0x3f71fb(0x122)] = _0x83d7ab, _0x11f1fd[_0x3f71fb(0x389)][_0x3f71fb(0x3ea)](_0x3f71fb(0x1f3));
                        }), _0x11f1fd[_0x191a01(0x1cd)](_0x175495);
                    });
                }
                _0x11f1fd[_0x58dbf9(0x389)][_0x58dbf9(0x3e6)](_0x58dbf9(0x1f3));
            };
        _0x214faf['addEventListener']('focus', () => _0x211e10(_0x214faf['value'])), _0x214faf[_0x391ce1(0x416)]('input', () => _0x211e10(_0x214faf['value'])), document[_0x391ce1(0x416)]('click', _0x44b631 => {
            const _0x33684b = _0x391ce1;
            !_0x214faf[_0x33684b(0x1bb)][_0x33684b(0x13a)](_0x44b631[_0x33684b(0x3ae)]) && _0x11f1fd[_0x33684b(0x389)][_0x33684b(0x3ea)](_0x33684b(0x1f3));
        });
    }
    function _0xa9baa3() {
        const _0x28c6c2 = _0x526209, _0x493de8 = document[_0x28c6c2(0x3ee)](_0x28c6c2(0x1dd));
        _0x493de8[_0x28c6c2(0x254)] = '', _0x493de8[_0x28c6c2(0x3ea)](new Option(_0x28c6c2(0x159), '')), _0x493de8[_0x28c6c2(0x3ea)](new Option(_0x28c6c2(0x3b3), _0x28c6c2(0x1cb)));
        for (const _0x5c81af in _0x9129b9) {
            const _0x5f14e3 = document[_0x28c6c2(0x2b3)](_0x28c6c2(0x3a3));
            _0x5f14e3[_0x28c6c2(0x1b6)] = _0x5c81af, _0x9129b9[_0x5c81af]['forEach'](_0x58d373 => {
                const _0x3726bc = _0x28c6c2;
                _0x5f14e3[_0x3726bc(0x1cd)](new Option(_0x58d373, _0x58d373));
            }), _0x493de8[_0x28c6c2(0x1cd)](_0x5f14e3);
        }
    }
    function _0x423da5(_0x1e7098) {
        const _0x54b558 = _0x526209, _0xcfd554 = [
                _0x54b558(0x1e5),
                _0x54b558(0x306),
                _0x54b558(0x24d)
            ];
        _0xcfd554['forEach'](_0x4e451b => {
            const _0x3b2749 = _0x54b558, _0x4c397a = _0x5615c8[_0x3b2749(0x42f) + (_0x4e451b[_0x3b2749(0x290)](0x0)['toUpperCase']() + _0x4e451b[_0x3b2749(0x277)](0x1))], _0x3e2a91 = _0x5615c8[_0x4e451b + _0x3b2749(0x3c4)];
            _0x1e7098 === _0x4e451b ? (_0x4c397a[_0x3b2749(0x389)]['add'](_0x3b2749(0x394)), _0x3e2a91[_0x3b2749(0x389)][_0x3b2749(0x3ea)](_0x3b2749(0x394))) : (_0x4c397a['classList'][_0x3b2749(0x3e6)]('active'), _0x3e2a91['classList'][_0x3b2749(0x3e6)](_0x3b2749(0x394)));
        }), _0x5615c8[_0x54b558(0x2a3)][_0x54b558(0x389)][_0x54b558(0x148)]('hidden', _0x1e7098 !== _0x54b558(0x1e5) || !_0x3526ae), _0x5615c8[_0x54b558(0x133)][_0x54b558(0x389)]['toggle']('hidden', _0x1e7098 !== _0x54b558(0x306) || !_0x101ab1), _0x5615c8[_0x54b558(0x2e3)][_0x54b558(0x389)][_0x54b558(0x148)](_0x54b558(0x1f3), _0x1e7098 !== _0x54b558(0x1e5) || _0x5615c8['tujuanGambarEl'][_0x54b558(0x122)] !== _0x54b558(0x144));
        const _0x3d046e = _0x1e7098 === 'lagu';
        _0x3d046e ? (_0x5615c8['laguOutputSection'][_0x54b558(0x389)][_0x54b558(0x3e6)](_0x54b558(0x1f3)), _0x5615c8[_0x54b558(0x2b0)][_0x54b558(0x389)][_0x54b558(0x3ea)](_0x54b558(0x1f3)), _0x5615c8[_0x54b558(0x3e2)][_0x54b558(0x389)][_0x54b558(0x3ea)](_0x54b558(0x1f3))) : (_0x5615c8['laguOutputSection'][_0x54b558(0x389)][_0x54b558(0x3ea)](_0x54b558(0x1f3)), _0x5615c8['finalPromptContainer'][_0x54b558(0x389)][_0x54b558(0x3e6)](_0x54b558(0x1f3)), _0x5615c8[_0x54b558(0x3e2)]['classList']['remove']('hidden'), _0x1014f9()), _0x5615c8[_0x54b558(0x2c0)][_0x54b558(0x389)][_0x54b558(0x3ea)](_0x54b558(0x1f3)), _0x5615c8['showJsonButton'][_0x54b558(0x25e)] = _0x54b558(0x35d);
    }
    function _0x1d2be5() {
        const _0xf25d5b = _0x526209, _0x153923 = _0x5615c8[_0xf25d5b(0x2f3)][_0xf25d5b(0x122)][_0xf25d5b(0x259)](), _0xeb5a4b = _0x5615c8['charPhysicEl'][_0xf25d5b(0x122)][_0xf25d5b(0x259)](), _0xa69baf = _0x5615c8[_0xf25d5b(0x18f)][_0xf25d5b(0x122)][_0xf25d5b(0x259)](), _0x44c704 = _0x5615c8['charStyleEl'][_0xf25d5b(0x122)][_0xf25d5b(0x259)](), _0x104151 = _0x5615c8[_0xf25d5b(0x304)][_0xf25d5b(0x122)][_0xf25d5b(0x259)]();
        let _0xaf41b6 = '(character\x20sheet:\x20' + (_0x153923 || _0xf25d5b(0x2d9)) + '.';
        if (_0xeb5a4b)
            _0xaf41b6 += _0xf25d5b(0x223) + _0xeb5a4b + '.';
        if (_0xa69baf)
            _0xaf41b6 += '\x20Pakaian\x20khas:\x20' + _0xa69baf + '.';
        if (_0x44c704)
            _0xaf41b6 += _0xf25d5b(0x26f) + _0x44c704 + '.';
        _0xaf41b6 += ')', _0x5615c8['characterSheetOutputEl']['value'] = _0xaf41b6, _0x5615c8[_0xf25d5b(0x360)][_0xf25d5b(0x122)] = (_0xaf41b6 + '\x20' + (_0x104151 || _0xf25d5b(0x1b0)) + _0xf25d5b(0x285) + _0x4c66a1 + '.')['trim']();
    }
    function _0x8db0e4() {
        const _0x113c19 = _0x526209, _0x392b4d = _0x5615c8[_0x113c19(0x390)][_0x113c19(0x122)];
        if (_0x392b4d === _0x113c19(0x2cf)) {
            const _0x9cb497 = _0x5615c8[_0x113c19(0x2ff)][_0x113c19(0x122)]['trim']();
            let _0x5a1184 = _0x113c19(0x38c);
            _0x5a1184 += _0x9cb497 || '[Jelaskan\x20cara\x20menggabungkan\x20foto\x201\x20dan\x202]', _0x5615c8['outputPromptEl'][_0x113c19(0x122)] = (_0x5a1184 + (_0x113c19(0x321) + _0x4c66a1 + '.'))[_0x113c19(0x259)]();
            return;
        }
        if (_0x392b4d === _0x113c19(0x144)) {
            _0x1d2be5();
            return;
        }
        const _0x182c49 = _0x392b4d === _0x113c19(0x2a2), _0x5661dd = _0x5615c8[_0x113c19(0x2f4)]['value']['trim'](), _0x1ad14f = _0x5615c8[_0x113c19(0x235)][_0x113c19(0x122)][_0x113c19(0x259)](), _0x5886b3 = _0x5615c8[_0x113c19(0x288)][_0x113c19(0x122)][_0x113c19(0x259)](), _0x53c497 = _0x5615c8[_0x113c19(0x251)][_0x113c19(0x122)]['trim'](), _0x205b41 = _0x5615c8[_0x113c19(0x228)]['value'];
        let _0x16b612 = '';
        if (_0x182c49) {
            let _0x595597 = _0x53c497 || _0x113c19(0x3c7) + (_0x5661dd || _0x113c19(0x426)) + '\x22', _0x381424 = _0x1ad14f ? _0x113c19(0x132) + _0x1ad14f : '', _0x1e2b55 = _0x5886b3 ? '\x20dengan\x20latar\x20belakang\x20baru\x20yaitu\x20' + _0x5886b3 : '';
            _0x16b612 = '' + _0x595597 + _0x381424 + _0x1e2b55 + '.';
        } else
            switch (_0x392b4d) {
            case 'produk':
                _0x16b612 = _0x113c19(0x193) + (_0x5661dd || '[Produk\x20Anda]') + '\x20dengan\x20latar\x20belakang\x20' + (_0x5886b3 || _0x113c19(0x3b6)) + '.\x20Bergaya\x20' + (_0x1ad14f || _0x113c19(0x345)) + '.\x20' + _0x53c497;
                break;
            case _0x113c19(0x1d9):
                _0x16b612 = _0x113c19(0x3d5) + _0x205b41 + _0x113c19(0x33b) + (_0x5661dd || _0x113c19(0x1b5)) + _0x113c19(0x368) + (_0x5886b3 || _0x113c19(0x40a)) + _0x113c19(0x428) + (_0x1ad14f || '[Gaya\x20Visual\x20Anda]') + '.\x20' + _0x53c497;
                break;
            case _0x113c19(0x379):
                _0x16b612 = _0x113c19(0x2d7) + (_0x5661dd || _0x113c19(0x373)) + _0x113c19(0x368) + (_0x5886b3 || _0x113c19(0x17a)) + _0x113c19(0x428) + (_0x1ad14f || _0x113c19(0x345)) + '.\x20' + _0x53c497;
                break;
            case _0x113c19(0x343):
                _0x16b612 = _0x113c19(0x1a8) + (_0x5661dd || _0x113c19(0x3d9)) + _0x113c19(0x374) + (_0x5661dd || _0x113c19(0x37c)) + '\x22.\x20Desainnya\x20harus\x20bergaya\x20' + (_0x1ad14f || _0x113c19(0x345)) + _0x113c19(0x368) + (_0x5886b3 || _0x113c19(0x1b4)) + '.\x20' + _0x53c497;
                break;
            case _0x113c19(0x2aa):
                _0x16b612 = _0x113c19(0x27b) + (_0x5661dd || _0x113c19(0x29a)) + '\x20di\x20sebuah\x20' + (_0x5886b3 || _0x113c19(0x3db)) + _0x113c19(0x38e) + (_0x1ad14f || _0x113c19(0x230)) + '.\x20' + _0x53c497;
                break;
            }
        _0x5615c8[_0x113c19(0x360)]['value'] = (_0x16b612 + (_0x113c19(0x321) + _0x4c66a1 + '.'))[_0x113c19(0x259)]();
    }
    function _0x5470d2() {
        const _0x32ebc3 = _0x526209, _0x2f98ee = _0x5615c8[_0x32ebc3(0x2ad)][_0x32ebc3(0x122)][_0x32ebc3(0x259)]() || _0x32ebc3(0x156), _0x45dddb = _0x5615c8[_0x32ebc3(0x1e8)][_0x32ebc3(0x122)][_0x32ebc3(0x259)]() || _0x32ebc3(0x1b9), _0xbf313f = _0x5615c8[_0x32ebc3(0x121)][_0x32ebc3(0x122)][_0x32ebc3(0x259)](), _0x29f342 = (_0x2f98ee + '\x20' + _0x45dddb)[_0x32ebc3(0x259)](), _0x1a7b88 = _0x5615c8[_0x32ebc3(0x137)][_0x32ebc3(0x122)]['trim']() || _0x32ebc3(0x32d), _0x54e3f1 = _0x5615c8[_0x32ebc3(0x1f7)]['value']['trim'](), _0x6aa47e = _0x5615c8[_0x32ebc3(0x240)][_0x32ebc3(0x122)][_0x32ebc3(0x259)]();
        let _0xb7dc7f = '';
        _0x101ab1 && (_0xb7dc7f += _0x32ebc3(0x359)), _0xb7dc7f += '' + _0x29f342, _0xbf313f && (_0xb7dc7f += _0x32ebc3(0x289) + _0xbf313f), _0xb7dc7f += '.\x20' + _0x1a7b88 + '.', _0x54e3f1 && (_0xb7dc7f += _0x32ebc3(0x231) + _0x54e3f1 + '.'), _0xb7dc7f += '\x20Aspek\x20rasio\x20' + _0x4c66a1 + '.', _0x6aa47e && (_0xb7dc7f += _0x32ebc3(0x12d) + _0x6aa47e + '\x22'), _0x5615c8[_0x32ebc3(0x360)][_0x32ebc3(0x122)] = _0xb7dc7f;
    }
    function _0x1014f9() {
        const _0xd6adfe = _0x526209;
        _0x5615c8['designerTabImage'][_0xd6adfe(0x389)][_0xd6adfe(0x13a)]('active') ? _0x8db0e4() : _0x5470d2();
    }
    function _0x3557fc() {
        const _0x3d63e7 = _0x526209, _0x17c911 = {
                'mode': '',
                'form_type': '',
                'prompt_string': _0x5615c8[_0x3d63e7(0x360)]['value'],
                'aspect_ratio': _0x4c66a1,
                'fields': {}
            };
        if (_0x5615c8[_0x3d63e7(0x238)][_0x3d63e7(0x389)][_0x3d63e7(0x13a)]('active'))
            _0x17c911[_0x3d63e7(0x425)] = _0x3d63e7(0x306), _0x17c911['form_type'] = _0x3d63e7(0x364), _0x17c911[_0x3d63e7(0x1cf)] = {
                'subjek': _0x5615c8['subjekVideoSubjectEl']['value'],
                'aksi': _0x5615c8[_0x3d63e7(0x1e8)][_0x3d63e7(0x122)],
                'latar_belakang': _0x5615c8['latarBelakangVideoEl']['value'],
                'gaya_kamera_suasana': _0x5615c8[_0x3d63e7(0x137)][_0x3d63e7(0x122)],
                'audio': _0x5615c8[_0x3d63e7(0x1f7)]['value'],
                'prompt_negatif': _0x5615c8[_0x3d63e7(0x240)][_0x3d63e7(0x122)]
            }, _0x101ab1 && (_0x17c911[_0x3d63e7(0x1cf)]['gambar_referensi'] = _0x101ab1[_0x3d63e7(0x357)], _0x17c911[_0x3d63e7(0x1cf)][_0x3d63e7(0x249)] = _0x134009);
        else {
            _0x17c911[_0x3d63e7(0x425)] = _0x3d63e7(0x1e5);
            const _0x47ae2f = _0x5615c8[_0x3d63e7(0x390)][_0x3d63e7(0x122)];
            _0x17c911[_0x3d63e7(0x2a8)] = _0x47ae2f;
            switch (_0x47ae2f) {
            case _0x3d63e7(0x2cf):
                _0x17c911[_0x3d63e7(0x1cf)] = {
                    'detail_komposisi': _0x5615c8[_0x3d63e7(0x2ff)][_0x3d63e7(0x122)],
                    'gambar_referensi_1': _0x58b497 ? 'uploaded_image_1.jpg' : null,
                    'gambar_referensi_2': _0x42471b ? _0x3d63e7(0x165) : null,
                    'gambar_referensi_1_base64': _0x58b497,
                    'gambar_referensi_2_base64': _0x42471b
                };
                break;
            case _0x3d63e7(0x144):
                _0x17c911[_0x3d63e7(0x1cf)] = {
                    'nama_karakter': _0x5615c8[_0x3d63e7(0x2f3)][_0x3d63e7(0x122)],
                    'ciri_fisik': _0x5615c8[_0x3d63e7(0x1db)][_0x3d63e7(0x122)],
                    'pakaian_khas': _0x5615c8[_0x3d63e7(0x18f)][_0x3d63e7(0x122)],
                    'gaya_artistik': _0x5615c8[_0x3d63e7(0x1d6)][_0x3d63e7(0x122)],
                    'skenario': _0x5615c8['characterScenarioInputEl'][_0x3d63e7(0x122)],
                    'gambar_referensi': _0x47d8f9 ? _0x3d63e7(0x36a) : null,
                    'gambar_referensi_base64': _0x47d8f9
                };
                break;
            default:
                _0x17c911[_0x3d63e7(0x1cf)] = {
                    'objek_utama': _0x5615c8[_0x3d63e7(0x2f4)][_0x3d63e7(0x122)],
                    'gaya_visual': _0x5615c8['gayaGambarEl'][_0x3d63e7(0x122)],
                    'latar_belakang': _0x5615c8[_0x3d63e7(0x288)]['value'],
                    'detail_tambahan': _0x5615c8['detailGambarEl'][_0x3d63e7(0x122)]
                };
                _0x47ae2f === 'packaging' && (_0x17c911[_0x3d63e7(0x1cf)][_0x3d63e7(0x2c3)] = _0x5615c8[_0x3d63e7(0x228)][_0x3d63e7(0x122)]);
                _0x3526ae && (_0x17c911[_0x3d63e7(0x1cf)][_0x3d63e7(0x33a)] = _0x3d63e7(0x3ce), _0x17c911[_0x3d63e7(0x1cf)][_0x3d63e7(0x249)] = _0x3526ae);
                break;
            }
        }
        return _0x17c911;
    }
    function _0x231c31() {
        const _0x5b28dd = _0x526209;
        if (!_0x5615c8[_0x5b28dd(0x2c0)]['classList']['contains'](_0x5b28dd(0x1f3))) {
            _0x5615c8[_0x5b28dd(0x2c0)][_0x5b28dd(0x389)][_0x5b28dd(0x3ea)]('hidden'), _0x5615c8[_0x5b28dd(0x1c9)]['textContent'] = _0x5b28dd(0x35d);
            return;
        }
        const _0x74439 = _0x3557fc(), _0x451ca4 = JSON[_0x5b28dd(0x367)](_0x74439, null, 0x2);
        _0x5615c8[_0x5b28dd(0x2be)][_0x5b28dd(0x122)] = _0x451ca4, _0x5615c8[_0x5b28dd(0x2c0)][_0x5b28dd(0x389)][_0x5b28dd(0x3e6)](_0x5b28dd(0x1f3)), _0x5615c8[_0x5b28dd(0x1c9)][_0x5b28dd(0x25e)] = _0x5b28dd(0x202);
    }
    function _0x423b0e() {
        const _0x3d53da = _0x526209, _0x369f17 = _0x5615c8[_0x3d53da(0x390)]['value'], _0x4ee25a = _0x3526ae !== null;
        _0x5615c8[_0x3d53da(0x16d)][_0x3d53da(0x389)][_0x3d53da(0x3ea)]('hidden'), _0x5615c8[_0x3d53da(0x262)]['classList'][_0x3d53da(0x3ea)](_0x3d53da(0x1f3)), _0x5615c8['characterCreatorForm']['classList'][_0x3d53da(0x3ea)]('hidden'), _0x5615c8[_0x3d53da(0x2a3)][_0x3d53da(0x389)][_0x3d53da(0x3ea)](_0x3d53da(0x1f3)), _0x5615c8['compositionPreviewContainer'][_0x3d53da(0x389)][_0x3d53da(0x3ea)](_0x3d53da(0x1f3)), _0x5615c8[_0x3d53da(0x2e3)][_0x3d53da(0x389)]['add'](_0x3d53da(0x1f3)), _0x5615c8['kemasanContainerEl']['classList'][_0x3d53da(0x3ea)](_0x3d53da(0x1f3)), _0x5615c8[_0x3d53da(0x2b0)]['classList'][_0x3d53da(0x3ea)](_0x3d53da(0x1f3)), _0x5615c8['jsonOutputContainer']['classList'][_0x3d53da(0x3ea)]('hidden'), _0x5615c8['showJsonButton'][_0x3d53da(0x25e)] = 'TAMPILKAN\x20JSON';
        if (_0x369f17 === 'gabungkan') {
            _0x5615c8['imageCompositionForm'][_0x3d53da(0x389)][_0x3d53da(0x3e6)]('hidden'), _0x5615c8['compositionPreviewContainer']['classList']['remove'](_0x3d53da(0x1f3)), _0x5615c8[_0x3d53da(0x2b0)][_0x3d53da(0x389)][_0x3d53da(0x3e6)](_0x3d53da(0x1f3)), _0x1014f9();
            return;
        }
        if (_0x369f17 === _0x3d53da(0x144)) {
            _0x5615c8[_0x3d53da(0x387)][_0x3d53da(0x389)]['remove'](_0x3d53da(0x1f3)), _0x5615c8[_0x3d53da(0x2e3)]['classList'][_0x3d53da(0x3e6)](_0x3d53da(0x1f3)), _0x5615c8[_0x3d53da(0x2b0)][_0x3d53da(0x389)]['remove'](_0x3d53da(0x1f3)), _0x1014f9();
            return;
        }
        _0x5615c8[_0x3d53da(0x16d)][_0x3d53da(0x389)]['remove']('hidden'), _0x5615c8['finalPromptContainer']['classList'][_0x3d53da(0x3e6)](_0x3d53da(0x1f3));
        _0x4ee25a && _0x5615c8['imagePreviewContainer'][_0x3d53da(0x389)]['remove'](_0x3d53da(0x1f3));
        const _0x13cc14 = {
                'create': {
                    'produk': {
                        'upload': _0x3d53da(0x32c),
                        'label1': 'Deskripsikan\x20Produk',
                        'placeholder1': _0x3d53da(0x274),
                        'label2': _0x3d53da(0x3c9),
                        'placeholder2': _0x3d53da(0x1c3),
                        'label3': 'Detail\x20Latar\x20&\x20Suasana',
                        'placeholder3': _0x3d53da(0x410)
                    },
                    'packaging': {
                        'upload': _0x3d53da(0x26e),
                        'label1': _0x3d53da(0x257),
                        'placeholder1': 'Contoh:\x20Keripik\x20kentang\x20pedas,\x20sabun\x20organik',
                        'label2': _0x3d53da(0x2cc),
                        'placeholder2': _0x3d53da(0x15e),
                        'label3': _0x3d53da(0x3d8),
                        'placeholder3': 'Contoh:\x20Teks\x20\x27Rasa\x20Original\x27,\x20logo\x20di\x20tengah,\x20material\x20kraft\x20paper'
                    },
                    'pemasaran': {
                        'upload': _0x3d53da(0x243),
                        'label1': _0x3d53da(0x314),
                        'placeholder1': _0x3d53da(0x352),
                        'label2': _0x3d53da(0x3aa),
                        'placeholder2': _0x3d53da(0x3ed),
                        'label3': 'Teks\x20atau\x20Elemen\x20Penting\x20Lainnya',
                        'placeholder3': _0x3d53da(0x152)
                    },
                    'logo': {
                        'upload': _0x3d53da(0x213),
                        'label1': 'Nama\x20Brand\x20&\x20Teks\x20pada\x20Logo',
                        'placeholder1': 'Contoh:\x20Aroma\x20Pagi',
                        'label2': _0x3d53da(0x3a5),
                        'placeholder2': _0x3d53da(0x16b),
                        'label3': 'Detail\x20Ikon\x20atau\x20Simbol\x20(Opsional)',
                        'placeholder3': 'Contoh:\x20ada\x20ikon\x20biji\x20kopi\x20sederhana\x20di\x20atasnya'
                    },
                    'ilustrasi': {
                        'upload': _0x3d53da(0x154),
                        'label1': 'Deskripsikan\x20Subjek\x20&\x20Adegan',
                        'placeholder1': _0x3d53da(0x16e),
                        'label2': _0x3d53da(0x174),
                        'placeholder2': _0x3d53da(0x3bd),
                        'label3': 'Detail\x20Suasana\x20&\x20Palet\x20Warna',
                        'placeholder3': 'Contoh:\x20suasana\x20senja,\x20warna\x20dominan\x20ungu\x20dan\x20oranye'
                    }
                },
                'edit': {
                    'upload': _0x3d53da(0x31a),
                    'label1': _0x3d53da(0x1a2),
                    'placeholder1': _0x3d53da(0x256),
                    'label2': _0x3d53da(0x138),
                    'placeholder2': _0x3d53da(0x253),
                    'label3': _0x3d53da(0x3fe),
                    'placeholder3': _0x3d53da(0x40c)
                }
            }, _0x1bb468 = _0x369f17 === _0x3d53da(0x2a2) ? _0x13cc14['edit'] : _0x13cc14[_0x3d53da(0x350)][_0x369f17];
        if (!_0x1bb468)
            return;
        _0x5615c8[_0x3d53da(0x27f)][_0x3d53da(0x25e)] = _0x1bb468[_0x3d53da(0x26a)], _0x5615c8['produkGambarLabelText'][_0x3d53da(0x25e)] = _0x1bb468['label1'], _0x5615c8['produkGambarEl']['placeholder'] = _0x1bb468[_0x3d53da(0x3ab)], _0x5615c8[_0x3d53da(0x35a)]['textContent'] = _0x1bb468['label2'], _0x5615c8['gayaGambarEl'][_0x3d53da(0x31d)] = _0x1bb468[_0x3d53da(0x3bb)], _0x5615c8[_0x3d53da(0x37f)]['textContent'] = _0x1bb468['label3'], _0x5615c8[_0x3d53da(0x251)][_0x3d53da(0x31d)] = _0x1bb468['placeholder3'];
        _0x369f17 === 'packaging' && _0x5615c8[_0x3d53da(0x1e6)][_0x3d53da(0x389)]['remove'](_0x3d53da(0x1f3));
        const _0x1d9e8b = _0x5615c8[_0x3d53da(0x16d)][_0x3d53da(0x3bc)](_0x3d53da(0x244));
        let _0x2b3ba9 = 0x1;
        _0x1d9e8b[_0x3d53da(0x232)](_0x56475d => {
            const _0x240c33 = _0x3d53da, _0x201edb = _0x56475d[_0x240c33(0x338)](_0x240c33(0x339));
            if (_0x201edb && !_0x56475d['classList'][_0x240c33(0x13a)]('hidden')) {
                const _0x1f7160 = _0x56475d['querySelector'](_0x240c33(0x2e7));
                _0x1f7160 && _0x1f7160['contains'](_0x201edb) && (_0x2b3ba9++, _0x201edb[_0x240c33(0x25e)] = _0x2b3ba9 + '.');
            }
        }), _0x1014f9();
    }
    async function _0x36852b(_0x4bf9ac, _0x184ffb, _0x570b2e = ![], _0x3d2b3b = null, _0x414cf3 = null) {
        const _0xb929f3 = _0x526209;
        if (!_0x287814)
            throw new Error(_0xb929f3(0x3d3));
        const _0x30ba33 = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=' + _0x287814, _0xba8b0e = [{ 'text': _0x184ffb }];
        _0x414cf3 && _0x414cf3['length'] > 0x0 && _0x414cf3[_0xb929f3(0x232)](_0x2d225a => {
            const _0x3b8db8 = _0xb929f3;
            _0xba8b0e[_0x3b8db8(0x362)]({
                'inlineData': {
                    'mimeType': _0x2d225a[_0x3b8db8(0x408)],
                    'data': _0x2d225a['data']
                }
            });
        });
        const _0x567ba3 = {
            'contents': [{ 'parts': _0xba8b0e }],
            'systemInstruction': { 'parts': [{ 'text': _0x4bf9ac }] }
        };
        _0x570b2e && _0x3d2b3b && (_0x567ba3['generationConfig'] = {
            'responseMimeType': _0xb929f3(0x334),
            'responseSchema': _0x3d2b3b
        });
        for (let _0x4b2d97 = 0x0; _0x4b2d97 < 0x3; _0x4b2d97++) {
            try {
                const _0x2da9ce = await fetch(_0x30ba33, {
                    'method': 'POST',
                    'headers': { 'Content-Type': 'application/json' },
                    'body': JSON[_0xb929f3(0x367)](_0x567ba3)
                });
                if (!_0x2da9ce['ok'])
                    throw new Error(_0xb929f3(0x2fa) + _0x2da9ce[_0xb929f3(0x205)]);
                const _0x13adf0 = await _0x2da9ce[_0xb929f3(0x1a6)]();
                if (_0x13adf0[_0xb929f3(0x20f)] && _0x13adf0['candidates'][0x0][_0xb929f3(0x2db)] && _0x13adf0['candidates'][0x0][_0xb929f3(0x2db)]['parts'][0x0]['text'])
                    return _0x13adf0[_0xb929f3(0x20f)][0x0]['content'][_0xb929f3(0x2d0)][0x0]['text'];
                else
                    throw new Error(_0xb929f3(0x35e));
            } catch (_0x4d02fd) {
                if (_0x4b2d97 === 0x2)
                    throw _0x4d02fd;
                await new Promise(_0x296ca3 => setTimeout(_0x296ca3, 0x3e8 * Math['pow'](0x2, _0x4b2d97)));
            }
        }
    }
    async function _0xa8de0c() {
        const _0x2e4f99 = _0x526209, _0x253c2c = _0x5615c8['outputPromptEl'][_0x2e4f99(0x122)];
        if (!_0x253c2c || _0x253c2c[_0x2e4f99(0x17b)]('[') && !_0x253c2c[_0x2e4f99(0x2b8)]('[')) {
            alert(_0x2e4f99(0x1f2));
            return;
        }
        _0x5615c8[_0x2e4f99(0x402)]['disabled'] = !![], _0x5615c8[_0x2e4f99(0x402)]['innerHTML'] = _0x2e4f99(0x25f);
        const _0x3d3915 = _0x5615c8['designerTabVideo'][_0x2e4f99(0x389)]['contains'](_0x2e4f99(0x394)), _0x18972f = _0x5615c8['tujuanGambarEl'][_0x2e4f99(0x122)];
        let _0x3bda0b = '';
        if (_0x3d3915)
            _0x3bda0b = _0x2e4f99(0x308);
        else {
            if (_0x18972f === _0x2e4f99(0x2cf))
                _0x3bda0b = _0x2e4f99(0x19c);
            else
                _0x18972f === _0x2e4f99(0x144) ? _0x3bda0b = 'PENTING:\x20Jawaban\x20Anda\x20HARUS\x20dalam\x20Bahasa\x20Indonesia.\x20Anda\x20adalah\x20ahli\x20penulis\x20karakter\x20dan\x20rekayasa\x20prompt.\x20Ambil\x20\x27character\x20sheet\x27\x20dan\x20skenario\x20dasar\x20pengguna,\x20lalu\x20kembangkan\x20menjadi\x20prompt\x20yang\x20sangat\x20deskriptif\x20dan\x20kaya\x20detail\x20untuk\x20menghasilkan\x20gambar\x20yang\x20konsisten\x20dan\x20sinematik.\x20Fokus\x20pada\x20pengayaan\x20detail\x20karakter\x20di\x20dalam\x20sheet.\x20Balas\x20HANYA\x20dengan\x20teks\x20prompt\x20yang\x20disempurnakan\x20tanpa\x20tambahan\x20atau\x20awalan\x20apapun.' : _0x3bda0b = _0x2e4f99(0x3e5);
        }
        const _0x41d820 = 'Berikut\x20adalah\x20prompt\x20dasarnya:\x20\x22' + _0x253c2c + '\x22';
        try {
            const _0x4f8568 = await _0x36852b(_0x3bda0b, _0x41d820);
            if (_0x4f8568) {
                let _0x2c576a = _0x4f8568['trim']()[_0x2e4f99(0x385)](/^"|"$/g, '')['replace'](/\[Gambar Input\]\s*/i, '');
                _0x5615c8[_0x2e4f99(0x360)][_0x2e4f99(0x122)] = _0x2c576a;
                if (_0x18972f === 'karakter') {
                    const _0x5ab1f5 = _0x2c576a[_0x2e4f99(0x211)](/\(character sheet:.*?\)/);
                    if (_0x5ab1f5)
                        _0x5615c8['characterSheetOutputEl']['value'] = _0x5ab1f5[0x0];
                }
            }
        } catch (_0x5ec0c1) {
            _0x5615c8[_0x2e4f99(0x360)]['value'] = _0x2e4f99(0x3cb) + _0x5ec0c1[_0x2e4f99(0x145)];
        } finally {
            _0x5615c8[_0x2e4f99(0x402)]['disabled'] = ![], _0x5615c8[_0x2e4f99(0x402)]['innerHTML'] = _0x2e4f99(0x143);
        }
    }
    function _0x17731d(_0x2d1490, _0x5a6d0d) {
        const _0x3f0e91 = _0x526209;
        if (!_0x2d1490 || !_0x2d1490['type'][_0x3f0e91(0x2b8)](_0x3f0e91(0x2ac)))
            return;
        const _0x4f646e = new FileReader();
        _0x4f646e[_0x3f0e91(0x1fe)] = _0x24edd2 => {
            const _0x4ac764 = _0x3f0e91, _0x593074 = _0x24edd2[_0x4ac764(0x3ae)]['result'][_0x4ac764(0x3b4)](',')[0x1], _0x4491b8 = _0x24edd2[_0x4ac764(0x3ae)][_0x4ac764(0x3e1)];
            if (_0x5a6d0d === _0x4ac764(0x286))
                _0x3526ae = _0x593074, _0x5615c8['uploadedImagePreview'][_0x4ac764(0x267)] = _0x4491b8, _0x5615c8['tujuanGambarEl'][_0x4ac764(0x122)] !== _0x4ac764(0x2a2) && (_0x5615c8[_0x4ac764(0x390)]['value'] = _0x4ac764(0x2a2)), _0x423b0e();
            else {
                if (_0x5a6d0d === _0x4ac764(0x3df))
                    _0x58b497 = _0x593074, _0x5615c8[_0x4ac764(0x36e)][_0x4ac764(0x267)] = _0x4491b8, _0x5615c8[_0x4ac764(0x36e)][_0x4ac764(0x1bb)][_0x4ac764(0x389)][_0x4ac764(0x3e6)](_0x4ac764(0x1f3));
                else {
                    if (_0x5a6d0d === _0x4ac764(0x39c))
                        _0x42471b = _0x593074, _0x5615c8[_0x4ac764(0x140)][_0x4ac764(0x267)] = _0x4491b8, _0x5615c8['uploadedComposePreview2'][_0x4ac764(0x1bb)][_0x4ac764(0x389)]['remove'](_0x4ac764(0x1f3));
                    else
                        _0x5a6d0d === _0x4ac764(0x382) && (_0x47d8f9 = _0x593074, _0x5615c8['uploadedCharPreview'][_0x4ac764(0x267)] = _0x4491b8, _0x5615c8[_0x4ac764(0x3f7)][_0x4ac764(0x389)][_0x4ac764(0x3e6)](_0x4ac764(0x1f3)));
                }
            }
            _0x1014f9();
        }, _0x4f646e[_0x3f0e91(0x417)](_0x2d1490);
    }
    async function _0x7fe095() {
        const _0x12b639 = _0x526209;
        if (!_0x3526ae) {
            alert('Mohon\x20upload\x20gambar\x20terlebih\x20dahulu.');
            return;
        }
        _0x5615c8[_0x12b639(0x2eb)][_0x12b639(0x41b)] = !![], _0x5615c8['analyzeImageText'][_0x12b639(0x25e)] = _0x12b639(0x25a), _0x5615c8[_0x12b639(0x21c)][_0x12b639(0x254)] = _0x12b639(0x14c), _0x5615c8[_0x12b639(0x169)][_0x12b639(0x122)] = _0x12b639(0x127);
        const _0x4bced4 = _0x12b639(0x3d1), _0x185250 = _0x12b639(0x2ed), _0x2dd88a = apiMode === _0x12b639(0x237) ? _0x287814 : '';
        if (apiMode === _0x12b639(0x237) && !_0x2dd88a) {
            _0x5615c8['imageAnalysisResult'][_0x12b639(0x122)] = _0x12b639(0x2b1);
            return;
        }
        try {
            const _0x4f6396 = await _0x36852b(_0x4bced4, _0x185250, ![], null, [{
                    'mimeType': _0x12b639(0x2c8),
                    'data': _0x3526ae
                }]);
            if (_0x4f6396) {
                _0x5615c8['imageAnalysisResult']['value'] = _0x4f6396;
                const _0x450a12 = _0x4f6396[_0x12b639(0x211)](/\*\*Subjek Utama:\*\*\s*([^\n]+)/i);
                _0x450a12 && _0x450a12[0x1] ? (_0x5615c8[_0x12b639(0x2f4)][_0x12b639(0x122)] = _0x450a12[0x1][_0x12b639(0x259)](), _0x5615c8[_0x12b639(0x251)]['value'] = _0x12b639(0x3c7) + _0x450a12[0x1]['trim']() + _0x12b639(0x181)) : _0x5615c8[_0x12b639(0x251)][_0x12b639(0x122)] = 'Sempurnakan\x20gambar\x20ini\x20berdasarkan\x20hasil\x20analisa.', _0x1014f9();
            } else
                throw new Error(_0x12b639(0x29d));
        } catch (_0x5438f4) {
            _0x5615c8['imageAnalysisResult'][_0x12b639(0x122)] = _0x12b639(0x302) + _0x5438f4[_0x12b639(0x145)];
        } finally {
            _0x5615c8[_0x12b639(0x2eb)][_0x12b639(0x41b)] = ![], _0x5615c8[_0x12b639(0x2bd)][_0x12b639(0x25e)] = _0x12b639(0x36b), _0x5615c8[_0x12b639(0x21c)][_0x12b639(0x254)] = '🔍';
        }
    }
    async function _0x154dcb() {
        const _0x1e938e = _0x526209;
        if (!_0x47d8f9) {
            alert(_0x1e938e(0x150));
            return;
        }
        _0x5615c8[_0x1e938e(0x1e4)][_0x1e938e(0x41b)] = !![], _0x5615c8['analyzeCharText'][_0x1e938e(0x25e)] = _0x1e938e(0x25a), _0x5615c8[_0x1e938e(0x420)]['innerHTML'] = _0x1e938e(0x14c);
        const _0x370f6b = 'PENTING:\x20Jawaban\x20Anda\x20HARUS\x20dalam\x20Bahasa\x20Indonesia.\x20Anda\x20adalah\x20seorang\x20analis\x20karakter\x20dan\x20art\x20director\x20yang\x20sangat\x20detail.\x20Diberikan\x20sebuah\x20gambar,\x20tugas\x20Anda\x20adalah\x20menganalisanya\x20dan\x20mengembalikan\x20deskripsi\x20karakter\x20dalam\x20format\x20JSON\x20yang\x20ketat.\x20Jangan\x20menambahkan\x20teks\x20atau\x20penjelasan\x20lain\x20di\x20luar\x20JSON.\x20JSON\x20harus\x20memiliki\x20properti\x20berikut:\x20\x22name\x22\x20(saran\x20nama\x20atau\x20deskripsi\x20singkat,\x20misal:\x20\x22prajurit\x20wanita\x20futuristik\x22),\x20\x22physic\x22\x20(deskripsi\x20detail\x20tentang\x20wajah,\x20rambut,\x20mata,\x20dan\x20postur\x20tubuh),\x20\x22attire\x22\x20(deskripsi\x20detail\x20tentang\x20pakaian\x20dan\x20aksesoris\x20yang\x20dikenakan),\x20dan\x20\x22style\x22\x20(deskripsi\x20gaya\x20artistik\x20gambar,\x20misal:\x20\x22fotorealistis,\x20pencahayaan\x20dramatis\x22\x20atau\x20\x22ilustrasi\x20anime\x202D\x22).', _0x155faf = _0x1e938e(0x164), _0x2e310e = apiMode === _0x1e938e(0x237) ? _0x287814 : '';
        if (apiMode === _0x1e938e(0x237) && !_0x2e310e) {
            alert(_0x1e938e(0x3a6)), _0x5615c8['analyzeCharButton']['disabled'] = ![], _0x5615c8['analyzeCharText']['textContent'] = _0x1e938e(0x34c), _0x5615c8[_0x1e938e(0x420)][_0x1e938e(0x254)] = '🤖';
            return;
        }
        const _0x792760 = {
            'type': 'OBJECT',
            'properties': {
                'name': { 'type': _0x1e938e(0x19f) },
                'physic': { 'type': 'STRING' },
                'attire': { 'type': _0x1e938e(0x19f) },
                'style': { 'type': _0x1e938e(0x19f) }
            },
            'required': [
                _0x1e938e(0x357),
                _0x1e938e(0x2e9),
                _0x1e938e(0x2af),
                'style'
            ]
        };
        try {
            const _0x6b7be1 = await _0x36852b(_0x370f6b, _0x155faf, !![], _0x792760, [{
                        'mimeType': _0x1e938e(0x2c8),
                        'data': _0x47d8f9
                    }]), _0x8c5572 = JSON[_0x1e938e(0x1d4)](_0x6b7be1);
            if (_0x8c5572)
                _0x5615c8['charNameEl'][_0x1e938e(0x122)] = _0x8c5572['name'] || '', _0x5615c8[_0x1e938e(0x1db)][_0x1e938e(0x122)] = _0x8c5572[_0x1e938e(0x2e9)] || '', _0x5615c8['charAttireEl'][_0x1e938e(0x122)] = _0x8c5572[_0x1e938e(0x2af)] || '', _0x5615c8['charStyleEl'][_0x1e938e(0x122)] = _0x8c5572[_0x1e938e(0x1ce)] || '', _0x1014f9();
            else
                throw new Error(_0x1e938e(0x168));
        } catch (_0x4d697d) {
            console[_0x1e938e(0x318)](_0x1e938e(0x217), _0x4d697d), alert(_0x1e938e(0x1b1) + _0x4d697d[_0x1e938e(0x145)]);
        } finally {
            _0x5615c8[_0x1e938e(0x1e4)][_0x1e938e(0x41b)] = ![], _0x5615c8[_0x1e938e(0x2c4)]['textContent'] = _0x1e938e(0x34c), _0x5615c8[_0x1e938e(0x420)][_0x1e938e(0x254)] = '🤖';
        }
    }
    async function _0x63d464() {
        const _0x56448b = _0x526209;
        if (!_0x134009) {
            alert(_0x56448b(0x1f1));
            return;
        }
        _0x5615c8[_0x56448b(0x40e)]['disabled'] = !![], _0x5615c8[_0x56448b(0x40e)][_0x56448b(0x254)] = '<span\x20class=\x22loader\x22></span>\x20MENGANALISA...', _0x5615c8[_0x56448b(0x146)][_0x56448b(0x389)][_0x56448b(0x3e6)]('hidden'), _0x5615c8[_0x56448b(0x146)][_0x56448b(0x122)] = _0x56448b(0x3f1);
        const _0x32bdb9 = _0x56448b(0x333), _0x1c17fd = _0x56448b(0x40b), _0x276196 = apiMode === 'user' ? _0x287814 : '';
        if (apiMode === _0x56448b(0x237) && !_0x276196) {
            alert(_0x56448b(0x3a6)), _0x5615c8[_0x56448b(0x40e)][_0x56448b(0x41b)] = ![], _0x5615c8[_0x56448b(0x40e)]['innerHTML'] = _0x56448b(0x1c1);
            return;
        }
        const _0x4f5bf7 = {
            'type': _0x56448b(0x3c2),
            'properties': {
                'subject': { 'type': _0x56448b(0x19f) },
                'action': { 'type': 'STRING' },
                'background': { 'type': _0x56448b(0x19f) },
                'style': { 'type': _0x56448b(0x19f) }
            },
            'required': [
                _0x56448b(0x16c),
                _0x56448b(0x1ee),
                'background',
                'style'
            ]
        };
        try {
            const _0x730d22 = await _0x36852b(_0x32bdb9, _0x1c17fd, !![], _0x4f5bf7, [{
                        'mimeType': 'image/jpeg',
                        'data': _0x134009
                    }]), _0x150488 = JSON[_0x56448b(0x1d4)](_0x730d22);
            if (_0x150488)
                _0x5615c8[_0x56448b(0x2ad)][_0x56448b(0x122)] = _0x150488[_0x56448b(0x16c)] || '', _0x5615c8[_0x56448b(0x1e8)][_0x56448b(0x122)] = _0x150488[_0x56448b(0x1ee)] || '', _0x5615c8[_0x56448b(0x121)][_0x56448b(0x122)] = _0x150488[_0x56448b(0x275)] || '', _0x5615c8[_0x56448b(0x137)][_0x56448b(0x122)] = _0x150488['style'] || '', _0x5615c8[_0x56448b(0x146)][_0x56448b(0x122)] = _0x56448b(0x423) + _0x150488[_0x56448b(0x16c)] + '\x0aAksi:\x20' + _0x150488['action'] + _0x56448b(0x388) + _0x150488[_0x56448b(0x275)] + '\x0aGaya:\x20' + _0x150488['style'], _0x1014f9();
            else
                throw new Error(_0x56448b(0x168));
        } catch (_0x2222ea) {
            console[_0x56448b(0x318)]('Error\x20calling\x20Gemini\x20Vision\x20API\x20for\x20video\x20analysis:', _0x2222ea), _0x5615c8[_0x56448b(0x146)][_0x56448b(0x122)] = _0x56448b(0x406) + _0x2222ea[_0x56448b(0x145)];
        } finally {
            _0x5615c8[_0x56448b(0x40e)][_0x56448b(0x41b)] = ![], _0x5615c8[_0x56448b(0x40e)]['innerHTML'] = '<span\x20id=\x22analyze-video-image-text\x22>ANALISA\x20GAMBAR\x20&\x20ISI\x20FORM</span>';
        }
    }
    function _0x42856f(_0x1a003e) {
        const _0x2ad879 = _0x526209;
        if (_0x1a003e && _0x1a003e[_0x2ad879(0x2ca)][_0x2ad879(0x2b8)](_0x2ad879(0x2ac))) {
            _0x101ab1 = _0x1a003e;
            const _0x58369b = new FileReader();
            _0x58369b['onload'] = _0x579de7 => {
                const _0x3b1858 = _0x2ad879;
                _0x134009 = _0x579de7['target'][_0x3b1858(0x3e1)][_0x3b1858(0x3b4)](',')[0x1], _0x5615c8[_0x3b1858(0x2d5)][_0x3b1858(0x267)] = _0x579de7[_0x3b1858(0x3ae)][_0x3b1858(0x3e1)], _0x5615c8[_0x3b1858(0x133)][_0x3b1858(0x389)][_0x3b1858(0x3e6)](_0x3b1858(0x1f3)), _0x1014f9();
            }, _0x58369b['readAsDataURL'](_0x1a003e);
        }
    }
    function _0x560037(_0xa1464b) {
        const _0x23719c = _0x526209;
        if (!_0xa1464b)
            return;
        if (!_0xa1464b[_0x23719c(0x2ca)][_0x23719c(0x2b8)](_0x23719c(0x20a))) {
            alert('Mohon\x20upload\x20file\x20audio\x20(MP3/WAV).');
            return;
        }
        const _0x5217e2 = new FileReader();
        _0x5217e2[_0x23719c(0x1fe)] = _0x1be64a => {
            const _0x2d51e2 = _0x23719c, _0xadc81e = _0x1be64a['target'][_0x2d51e2(0x3e1)]['split'](',')[0x1];
            _0x3c9b79(_0xadc81e, _0xa1464b[_0x2d51e2(0x2ca)]);
        }, _0x5217e2['readAsDataURL'](_0xa1464b);
    }
    async function _0x3c9b79(_0x1fb89c, _0x3213be) {
        const _0x41913c = _0x526209, _0x1a6e7d = document['getElementById'](_0x41913c(0x204));
        if (_0x5615c8['buatPromptLaguButton'])
            _0x5615c8['buatPromptLaguButton'][_0x41913c(0x41b)] = !![];
        _0x5615c8['outputLirik']['value'] = _0x41913c(0x2ea), _0x1a6e7d[_0x41913c(0x122)] = _0x41913c(0x271), _0x5615c8[_0x41913c(0x3e3)][_0x41913c(0x122)] = _0x41913c(0x271);
        const _0x35bda3 = _0x41913c(0x233), _0x3ba369 = 'Analisa\x20file\x20audio\x20ini\x20dan\x20ekstrak\x20datanya\x20sesuai\x20instruksi.', _0x5cfcbd = {
                'type': 'OBJECT',
                'properties': {
                    'lirik': { 'type': _0x41913c(0x19f) },
                    'genre': { 'type': 'STRING' },
                    'tema': { 'type': 'STRING' }
                },
                'required': [
                    _0x41913c(0x3eb),
                    _0x41913c(0x1b7),
                    _0x41913c(0x173)
                ]
            };
        try {
            const _0x5e27e5 = await _0x36852b(_0x35bda3, _0x3ba369, !![], _0x5cfcbd, [{
                        'mimeType': _0x3213be,
                        'data': _0x1fb89c
                    }]), _0x366d08 = JSON['parse'](_0x5e27e5);
            _0x366d08 && (_0x5615c8[_0x41913c(0x35b)][_0x41913c(0x122)] = formatLyrics(_0x366d08[_0x41913c(0x3eb)]), _0x1a6e7d[_0x41913c(0x122)] = _0x366d08[_0x41913c(0x173)] || '', _0x5615c8['genreUtamaSearch'][_0x41913c(0x122)] = _0x366d08[_0x41913c(0x1b7)] || '');
        } catch (_0x4b2d86) {
            console[_0x41913c(0x318)](_0x4b2d86), _0x5615c8['outputLirik']['value'] = 'Gagal\x20menganalisa\x20audio:\x20' + _0x4b2d86['message'], _0x1a6e7d['value'] = '', _0x5615c8['genreUtamaSearch'][_0x41913c(0x122)] = '';
        } finally {
            if (_0x5615c8[_0x41913c(0x1c7)])
                _0x5615c8[_0x41913c(0x1c7)][_0x41913c(0x41b)] = ![];
            _0x5615c8[_0x41913c(0x1a4)][_0x41913c(0x122)] = '';
        }
    }
    function _0x12795c() {
        const _0xd1ecb9 = _0x526209, _0x1ac175 = _0x5615c8[_0xd1ecb9(0x2e4)][_0xd1ecb9(0x389)]['contains']('hidden');
        _0x1ac175 ? (_0x5615c8[_0xd1ecb9(0x2e4)][_0xd1ecb9(0x389)]['remove']('hidden'), setTimeout(() => {
            const _0x1cb0c2 = _0xd1ecb9;
            _0x5615c8[_0x1cb0c2(0x2e4)][_0x1cb0c2(0x389)][_0x1cb0c2(0x3e6)](_0x1cb0c2(0x266), _0x1cb0c2(0x31f));
        }, 0xa)) : (_0x5615c8['assistantModal'][_0xd1ecb9(0x389)][_0xd1ecb9(0x3ea)](_0xd1ecb9(0x266), _0xd1ecb9(0x31f)), setTimeout(() => {
            const _0x405d3b = _0xd1ecb9;
            _0x5615c8[_0x405d3b(0x2e4)][_0x405d3b(0x389)]['add']('hidden');
        }, 0x12c));
    }
    function _0x2dedc4(_0x447cf6) {
        const _0x22e344 = _0x526209;
        let _0x29e580 = _0x447cf6[_0x22e344(0x385)](/&/g, '&amp;')[_0x22e344(0x385)](/</g, '&lt;')['replace'](/>/g, _0x22e344(0x2d4));
        return _0x29e580[_0x22e344(0x385)](/\*\*(.*?)\*\*/g, '<b>$1</b>');
    }
    function _0x1815eb(_0x852995, _0x36ceb1, _0x468a22 = ![]) {
        const _0x47ce5a = _0x526209, _0xaba457 = document[_0x47ce5a(0x2b3)](_0x47ce5a(0x38f)), _0x4fc0f0 = document[_0x47ce5a(0x2b3)](_0x47ce5a(0x38f));
        _0xaba457[_0x47ce5a(0x389)][_0x47ce5a(0x3ea)](_0x47ce5a(0x418), 'w-full', _0x47ce5a(0x3ef)), _0x4fc0f0['classList'][_0x47ce5a(0x3ea)]('p-3', 'rounded-lg', _0x47ce5a(0x1bf), _0x47ce5a(0x32a)), _0x36ceb1 === _0x47ce5a(0x237) ? (_0xaba457[_0x47ce5a(0x389)][_0x47ce5a(0x3ea)](_0x47ce5a(0x393)), _0x4fc0f0[_0x47ce5a(0x389)][_0x47ce5a(0x3ea)](_0x47ce5a(0x2a4), _0x47ce5a(0x3a2))) : (_0xaba457[_0x47ce5a(0x389)][_0x47ce5a(0x3ea)](_0x47ce5a(0x1de)), _0x4fc0f0['classList'][_0x47ce5a(0x3ea)](_0x47ce5a(0x2da), _0x47ce5a(0x3af))), _0x468a22 ? (_0x4fc0f0[_0x47ce5a(0x254)] = '<div\x20class=\x22typing-indicator\x22><span>.</span><span>.</span><span>.</span></div>', _0x4fc0f0['id'] = _0x47ce5a(0x26b)) : _0x4fc0f0['innerHTML'] = _0x2dedc4(_0x852995), _0xaba457[_0x47ce5a(0x1cd)](_0x4fc0f0), _0x5615c8[_0x47ce5a(0x2ef)]['appendChild'](_0xaba457), _0x5615c8[_0x47ce5a(0x2ef)][_0x47ce5a(0x2b5)] = _0x5615c8['assistantChatBody']['scrollHeight'];
    }
    function _0x515168(_0x3a4183) {
        const _0x5c89c7 = _0x526209, _0x3ccfa2 = document[_0x5c89c7(0x3ee)](_0x5c89c7(0x26b));
        _0x3ccfa2 && (_0x3ccfa2['innerHTML'] = _0x2dedc4(_0x3a4183), _0x3ccfa2[_0x5c89c7(0x2dd)]('id')), _0x5615c8[_0x5c89c7(0x2ef)][_0x5c89c7(0x2b5)] = _0x5615c8[_0x5c89c7(0x2ef)][_0x5c89c7(0x2e5)];
    }
    async function _0x1dde37() {
        const _0x8f8d62 = _0x526209;
        if (!_0x364b68(_0x8f8d62(0x3ff)))
            return;
        const _0x8f32ae = _0x5615c8[_0x8f8d62(0x3cc)]['value']['trim']();
        if (!_0x8f32ae)
            return;
        _0x1815eb(_0x8f32ae, _0x8f8d62(0x237)), _0x5615c8[_0x8f8d62(0x3cc)]['value'] = '', _0x5615c8[_0x8f8d62(0x3cc)]['disabled'] = !![], _0x5615c8[_0x8f8d62(0x356)][_0x8f8d62(0x41b)] = !![], _0x1815eb('', 'assistant', !![]);
        const _0x148626 = _0x8f8d62(0x29e);
        try {
            const _0x3545ad = await _0x36852b(_0x148626, _0x8f32ae);
            _0x515168(_0x3545ad);
        } catch (_0x21f72a) {
            _0x515168(_0x8f8d62(0x28c) + _0x21f72a['message']);
        } finally {
            _0x5615c8['assistantInput'][_0x8f8d62(0x41b)] = ![], _0x5615c8[_0x8f8d62(0x356)][_0x8f8d62(0x41b)] = ![], _0x5615c8[_0x8f8d62(0x3cc)][_0x8f8d62(0x3ba)]();
        }
    }
    function _0x2ec078(_0x40e9fb) {
        const _0x16a0bd = _0x526209;
        _0x40e9fb && (_0x5615c8[_0x16a0bd(0x272)][_0x16a0bd(0x254)] = _0x40e9fb[_0x16a0bd(0x254)]);
    }
    function _0xd5935c() {
        const _0x1fd670 = _0x526209, _0x348d6f = _0x5615c8['tujuanGambarEl']['value'];
        if (_0x348d6f === 'karakter') {
            const _0xc01a47 = _0x5615c8[_0x1fd670(0x17d)][_0x1fd670(0x122)], _0x7a0083 = _0x5615c8[_0x1fd670(0x304)]['value'];
            _0x5615c8[_0x1fd670(0x2ad)][_0x1fd670(0x122)] = _0xc01a47 || '', _0x5615c8[_0x1fd670(0x1e8)][_0x1fd670(0x122)] = _0x7a0083 || '', _0x5615c8['latarBelakangVideoEl']['value'] = '', _0x5615c8[_0x1fd670(0x137)]['value'] = _0x5615c8['charStyleEl'][_0x1fd670(0x122)] || '';
        } else {
            const _0xefe03a = _0x5615c8['produkGambarEl'][_0x1fd670(0x122)], _0x116d0d = _0x5615c8[_0x1fd670(0x235)][_0x1fd670(0x122)], _0x3f9429 = _0x5615c8['latarBelakangGambarEl'][_0x1fd670(0x122)], _0x24d78f = _0x5615c8[_0x1fd670(0x251)][_0x1fd670(0x122)];
            _0x5615c8['subjekVideoSubjectEl'][_0x1fd670(0x122)] = _0xefe03a || '', _0x5615c8[_0x1fd670(0x1e8)][_0x1fd670(0x122)] = _0x24d78f || '', _0x5615c8['latarBelakangVideoEl']['value'] = _0x3f9429 || '', _0x5615c8['gayaVideoEl']['value'] = _0x116d0d || '';
        }
        _0x5470d2();
        const _0x4d6304 = _0x5615c8[_0x1fd670(0x250)], _0x45fa80 = _0x4d6304[_0x1fd670(0x338)](_0x1fd670(0x371))[_0x1fd670(0x25e)];
        _0x4d6304[_0x1fd670(0x338)](_0x1fd670(0x371))[_0x1fd670(0x25e)] = _0x1fd670(0x39f), _0x4d6304[_0x1fd670(0x389)][_0x1fd670(0x3ea)](_0x1fd670(0x130), 'text-white'), setTimeout(() => {
            const _0x1030c9 = _0x1fd670;
            _0x4d6304[_0x1030c9(0x338)]('span')['textContent'] = _0x45fa80, _0x4d6304['classList'][_0x1030c9(0x3e6)](_0x1030c9(0x130), _0x1030c9(0x147));
        }, 0x7d0);
    }
    function _0x760392() {
        const _0x2d0c03 = _0x526209;
        if (!_0x597f8b) {
            alert('Database\x20tidak\x20siap.\x20Mohon\x20coba\x20lagi\x20sesaat.');
            return;
        }
        const _0x1faeb0 = new Date(), _0x1aa52b = _0x4ec280 => _0x4ec280[_0x2d0c03(0x2a7)]()[_0x2d0c03(0x216)](0x2, '0'), _0x53013e = '' + _0x1aa52b(_0x1faeb0['getDate']()) + _0x1aa52b(_0x1faeb0[_0x2d0c03(0x2ba)]() + 0x1) + _0x1faeb0[_0x2d0c03(0x12e)]()[_0x2d0c03(0x2a7)]()[_0x2d0c03(0x277)](-0x2), _0xc65e93 = '' + _0x1aa52b(_0x1faeb0['getHours']()) + _0x1aa52b(_0x1faeb0['getMinutes']());
        let _0x25090a = '', _0x22b6fd = {};
        if (_0x5615c8[_0x2d0c03(0x1c6)]['classList'][_0x2d0c03(0x13a)](_0x2d0c03(0x394)))
            _0x25090a = _0x2d0c03(0x397), _0x22b6fd = _0x3557fc();
        else {
            if (_0x5615c8['designerTabVideo'][_0x2d0c03(0x389)][_0x2d0c03(0x13a)](_0x2d0c03(0x394)))
                _0x25090a = _0x2d0c03(0x306), _0x22b6fd = _0x3557fc();
            else
                _0x5615c8[_0x2d0c03(0x328)][_0x2d0c03(0x389)][_0x2d0c03(0x13a)]('active') && (_0x25090a = 'lagu', _0x22b6fd = {
                    'mode': _0x2d0c03(0x24d),
                    'inputs': {
                        'tema': document['getElementById'](_0x2d0c03(0x204))[_0x2d0c03(0x122)],
                        'bahasa': document[_0x2d0c03(0x3ee)](_0x2d0c03(0x22a))['value'],
                        'bahasa_lainnya': document[_0x2d0c03(0x3ee)]('bahasa-lagu-lainnya')[_0x2d0c03(0x122)],
                        'vokalis': document['getElementById'](_0x2d0c03(0x21a))['value'],
                        'genre_utama': document[_0x2d0c03(0x3ee)](_0x2d0c03(0x36c))['value'],
                        'genre_kombinasi': document[_0x2d0c03(0x3ee)](_0x2d0c03(0x297))['value'],
                        'input_lainnya': document['getElementById'](_0x2d0c03(0x3ad))[_0x2d0c03(0x122)]
                    },
                    'outputs': {
                        'lirik': _0x5615c8[_0x2d0c03(0x35b)][_0x2d0c03(0x122)],
                        'gaya': _0x5615c8[_0x2d0c03(0x427)][_0x2d0c03(0x122)],
                        'judul': Array['from'](_0x5615c8[_0x2d0c03(0x24f)][_0x2d0c03(0x3bc)]('input'))[_0x2d0c03(0x196)](_0x11d94f => _0x11d94f[_0x2d0c03(0x122)]),
                        'prompt_alternatif': _0x5615c8[_0x2d0c03(0x31b)][_0x2d0c03(0x122)]
                    }
                });
        }
        if (Object[_0x2d0c03(0x2c2)](_0x22b6fd)['length'] === 0x0) {
            alert(_0x2d0c03(0x278));
            return;
        }
        const _0x4ae25a = _0x25090a + '_' + _0x53013e + '-' + _0xc65e93 + _0x2d0c03(0x1e1), _0xfd95eb = {
                'filename': _0x4ae25a,
                'type': _0x25090a,
                'timestamp': _0x1faeb0[_0x2d0c03(0x42b)](),
                'data': _0x22b6fd
            }, _0xa7857b = _0x597f8b['transaction'](['prompts'], _0x2d0c03(0x176)), _0x2bea2a = _0xa7857b[_0x2d0c03(0x2c5)]('prompts'), _0x415969 = _0x2bea2a[_0x2d0c03(0x3ea)](_0xfd95eb);
        _0x415969[_0x2d0c03(0x1c0)] = () => {
            const _0x5b116e = _0x2d0c03, _0x13affa = _0x5615c8['savePromptButton'], _0x39ffbd = _0x13affa[_0x5b116e(0x25e)];
            _0x13affa['textContent'] = 'TERSMPAN!', _0x13affa['classList'][_0x5b116e(0x3ea)](_0x5b116e(0x130), _0x5b116e(0x147)), setTimeout(() => {
                const _0x34dce3 = _0x5b116e;
                _0x13affa[_0x34dce3(0x25e)] = _0x39ffbd, _0x13affa[_0x34dce3(0x389)][_0x34dce3(0x3e6)](_0x34dce3(0x130), _0x34dce3(0x147));
            }, 0x7d0);
        }, _0x415969['onerror'] = _0x27251d => {
            const _0xf07711 = _0x2d0c03;
            console[_0xf07711(0x318)]('Gagal\x20menyimpan\x20prompt:', _0x27251d['target'][_0xf07711(0x24a)]), alert('Gagal\x20menyimpan\x20prompt.\x20Lihat\x20konsol\x20untuk\x20detail.');
        };
    }
    function _0x4b2d07(_0x3311aa) {
        const _0x550251 = _0x526209;
        if (!_0x597f8b)
            return;
        const _0x1613c2 = _0x597f8b['transaction']([_0x550251(0x2ee)], _0x550251(0x3f0)), _0x4cac70 = _0x1613c2[_0x550251(0x2c5)](_0x550251(0x2ee)), _0x29ca62 = _0x4cac70[_0x550251(0x3fc)](_0x3311aa);
        _0x29ca62[_0x550251(0x1c0)] = _0x385aef => {
            const _0x20f91c = _0x550251, _0x3ab322 = _0x385aef[_0x20f91c(0x3ae)][_0x20f91c(0x3e1)];
            if (!_0x3ab322) {
                alert(_0x20f91c(0x1d7));
                return;
            }
            _0x5cd723(_0x20f91c(0x21d));
            const {
                type: _0x5eaf40,
                data: _0x49508d
            } = _0x3ab322;
            switch (_0x5eaf40) {
            case _0x20f91c(0x397):
                _0x423da5(_0x20f91c(0x1e5)), _0x5615c8[_0x20f91c(0x390)]['value'] = _0x49508d[_0x20f91c(0x2a8)], _0x423b0e();
                if (_0x49508d[_0x20f91c(0x2a8)] === 'karakter')
                    Object[_0x20f91c(0x2c2)](_0x49508d[_0x20f91c(0x1cf)])[_0x20f91c(0x232)](_0x5187fa => {
                        const _0x14c6b7 = _0x20f91c, _0x3a2792 = {
                                'nama_karakter': _0x14c6b7(0x2f3),
                                'ciri_fisik': 'charPhysicEl',
                                'pakaian_khas': 'charAttireEl',
                                'gaya_artistik': _0x14c6b7(0x1d6),
                                'skenario': _0x14c6b7(0x304)
                            }[_0x5187fa];
                        _0x3a2792 && _0x5615c8[_0x3a2792] && (_0x5615c8[_0x3a2792][_0x14c6b7(0x122)] = _0x49508d[_0x14c6b7(0x1cf)][_0x5187fa]);
                    }), _0x49508d['fields'][_0x20f91c(0x249)] && (_0x47d8f9 = _0x49508d[_0x20f91c(0x1cf)]['gambar_referensi_base64'], _0x5615c8[_0x20f91c(0x24b)][_0x20f91c(0x267)] = 'data:image/jpeg;base64,' + _0x47d8f9, _0x5615c8['characterPreviewContainer'][_0x20f91c(0x389)]['remove'](_0x20f91c(0x1f3)));
                else {
                    if (_0x49508d[_0x20f91c(0x2a8)] === _0x20f91c(0x2cf)) {
                        if (_0x49508d['fields'][_0x20f91c(0x407)])
                            _0x5615c8[_0x20f91c(0x2ff)][_0x20f91c(0x122)] = _0x49508d[_0x20f91c(0x1cf)][_0x20f91c(0x407)];
                        _0x49508d[_0x20f91c(0x1cf)][_0x20f91c(0x1b2)] && (_0x58b497 = _0x49508d['fields'][_0x20f91c(0x1b2)], _0x5615c8[_0x20f91c(0x36e)][_0x20f91c(0x267)] = _0x20f91c(0x291) + _0x58b497, _0x5615c8[_0x20f91c(0x36e)][_0x20f91c(0x1bb)][_0x20f91c(0x389)]['remove'](_0x20f91c(0x1f3))), _0x49508d[_0x20f91c(0x1cf)][_0x20f91c(0x1aa)] && (_0x42471b = _0x49508d[_0x20f91c(0x1cf)][_0x20f91c(0x1aa)], _0x5615c8['uploadedComposePreview2']['src'] = 'data:image/jpeg;base64,' + _0x42471b, _0x5615c8['uploadedComposePreview2'][_0x20f91c(0x1bb)][_0x20f91c(0x389)][_0x20f91c(0x3e6)](_0x20f91c(0x1f3)));
                    } else
                        Object['keys'](_0x49508d[_0x20f91c(0x1cf)])[_0x20f91c(0x232)](_0x10d551 => {
                            const _0x739b85 = _0x20f91c, _0x30a1bb = {
                                    'objek_utama': 'produkGambarEl',
                                    'gaya_visual': 'gayaGambarEl',
                                    'latar_belakang': _0x739b85(0x288),
                                    'detail_tambahan': _0x739b85(0x251),
                                    'jenis_kemasan': _0x739b85(0x228)
                                }[_0x10d551];
                            _0x30a1bb && _0x5615c8[_0x30a1bb] && (_0x5615c8[_0x30a1bb][_0x739b85(0x122)] = _0x49508d['fields'][_0x10d551]);
                        }), _0x49508d[_0x20f91c(0x1cf)][_0x20f91c(0x249)] && (_0x3526ae = _0x49508d['fields'][_0x20f91c(0x249)], _0x5615c8[_0x20f91c(0x14d)]['src'] = _0x20f91c(0x291) + _0x3526ae, _0x5615c8[_0x20f91c(0x2a3)][_0x20f91c(0x389)][_0x20f91c(0x3e6)](_0x20f91c(0x1f3)));
                }
                break;
            case 'video':
                _0x423da5(_0x20f91c(0x306)), Object[_0x20f91c(0x2c2)](_0x49508d[_0x20f91c(0x1cf)])['forEach'](_0x3c8412 => {
                    const _0x34bd8b = _0x20f91c, _0x28c4da = {
                            'subjek': 'subjekVideoSubjectEl',
                            'aksi': _0x34bd8b(0x1e8),
                            'latar_belakang': _0x34bd8b(0x121),
                            'gaya_kamera_suasana': _0x34bd8b(0x137),
                            'audio': _0x34bd8b(0x1f7),
                            'prompt_negatif': _0x34bd8b(0x240)
                        }[_0x3c8412];
                    _0x28c4da && _0x5615c8[_0x28c4da] && (_0x5615c8[_0x28c4da][_0x34bd8b(0x122)] = _0x49508d[_0x34bd8b(0x1cf)][_0x3c8412]);
                });
                _0x49508d[_0x20f91c(0x1cf)][_0x20f91c(0x249)] && (_0x134009 = _0x49508d[_0x20f91c(0x1cf)][_0x20f91c(0x249)], _0x5615c8[_0x20f91c(0x2d5)][_0x20f91c(0x267)] = _0x20f91c(0x291) + _0x134009, _0x5615c8['videoPreviewContainer'][_0x20f91c(0x389)][_0x20f91c(0x3e6)](_0x20f91c(0x1f3)));
                break;
            case _0x20f91c(0x24d):
                _0x423da5(_0x20f91c(0x24d));
                if (_0x49508d[_0x20f91c(0x2d2)] && _0x49508d[_0x20f91c(0x355)]) {
                    document['getElementById'](_0x20f91c(0x204))['value'] = _0x49508d[_0x20f91c(0x2d2)]['tema'] || '', document['getElementById'](_0x20f91c(0x22a))[_0x20f91c(0x122)] = _0x49508d[_0x20f91c(0x2d2)]['bahasa'] || _0x20f91c(0x298), document[_0x20f91c(0x3ee)](_0x20f91c(0x37e))[_0x20f91c(0x122)] = _0x49508d[_0x20f91c(0x2d2)]['bahasa_lainnya'] || '', document['getElementById'](_0x20f91c(0x21a))[_0x20f91c(0x122)] = _0x49508d[_0x20f91c(0x2d2)]['vokalis'] || 'Perempuan', document[_0x20f91c(0x3ee)](_0x20f91c(0x36c))[_0x20f91c(0x122)] = _0x49508d[_0x20f91c(0x2d2)]['genre_utama'] || '', document[_0x20f91c(0x3ee)](_0x20f91c(0x297))[_0x20f91c(0x122)] = _0x49508d[_0x20f91c(0x2d2)][_0x20f91c(0x2c1)] || '', document['getElementById']('input-lainnya-lagu')['value'] = _0x49508d[_0x20f91c(0x2d2)][_0x20f91c(0x3b1)] || '';
                    const _0x4b4a25 = document[_0x20f91c(0x3ee)](_0x20f91c(0x22a)), _0x565b32 = document['getElementById'](_0x20f91c(0x37e));
                    _0x565b32['classList'][_0x20f91c(0x148)](_0x20f91c(0x1f3), _0x4b4a25[_0x20f91c(0x122)] !== _0x20f91c(0x21b)), _0x5615c8[_0x20f91c(0x35b)][_0x20f91c(0x122)] = _0x49508d[_0x20f91c(0x355)]['lirik'] || '', _0x5615c8[_0x20f91c(0x427)][_0x20f91c(0x122)] = _0x49508d[_0x20f91c(0x355)][_0x20f91c(0x1ff)] || '', _0x5615c8[_0x20f91c(0x31b)][_0x20f91c(0x122)] = _0x49508d['outputs'][_0x20f91c(0x215)] || '', _0x49508d[_0x20f91c(0x355)][_0x20f91c(0x155)] && _0x49508d['outputs'][_0x20f91c(0x155)][_0x20f91c(0x315)] > 0x0 && _0x243f87(_0x49508d[_0x20f91c(0x355)][_0x20f91c(0x155)]);
                } else
                    _0x5615c8[_0x20f91c(0x35b)][_0x20f91c(0x122)] = _0x49508d[_0x20f91c(0x3eb)] || '', _0x5615c8[_0x20f91c(0x427)][_0x20f91c(0x122)] = _0x49508d[_0x20f91c(0x1ff)] || '', _0x5615c8[_0x20f91c(0x31b)]['value'] = _0x49508d['prompt_alternatif'] || '', _0x49508d[_0x20f91c(0x155)] && _0x49508d['judul'][_0x20f91c(0x315)] > 0x0 && _0x243f87(_0x49508d[_0x20f91c(0x155)]);
                break;
            }
            _0x1014f9();
            const _0x108f99 = document[_0x20f91c(0x338)]('.use-prompt-btn[data-id=\x22' + _0x3311aa + '\x22]');
            _0x108f99 && (_0x108f99[_0x20f91c(0x25e)] = _0x20f91c(0x41d), setTimeout(() => {
                const _0x23f80d = _0x20f91c;
                _0x108f99[_0x23f80d(0x25e)] = _0x23f80d(0x358);
            }, 0x7d0));
        }, _0x29ca62['onerror'] = _0x3d652f => {
            alert('Gagal\x20mengambil\x20data\x20prompt\x20dari\x20database.');
        };
    }
    function _0x4165ac(_0x97a364) {
        const _0x2a1d42 = _0x526209, {
                type: _0xbdf1b3,
                data: _0x4ae77b
            } = _0x97a364;
        let _0x1f7e92 = '';
        const _0x56a443 = _0x14d5b4 => {
                const _0x22df20 = a0_0x38c0;
                return _0x14d5b4[_0x22df20(0x385)](/_/g, '\x20')['replace'](/\b\w/g, _0x43b740 => _0x43b740['toUpperCase']());
            }, _0x38bbb4 = (_0x40a6e5, _0x3b3729) => {
                const _0xaa5b07 = a0_0x38c0;
                if (!_0x3b3729)
                    return '';
                return _0xaa5b07(0x346) + _0x40a6e5 + _0xaa5b07(0x30a) + _0x3b3729 + _0xaa5b07(0x27a);
            };
        _0x1f7e92 += _0x2a1d42(0x1f4) + _0x97a364[_0x2a1d42(0x29c)] + _0x2a1d42(0x20b) + new Date(_0x97a364['timestamp'])[_0x2a1d42(0x184)]() + _0x2a1d42(0x149) + _0xbdf1b3 + _0x2a1d42(0x23d), _0x1f7e92 += '<h5\x20class=\x22font-bold\x20text-accent-color\x20mb-2\x20uppercase\x20tracking-wider\x20text-xs\x22>Data\x20Input\x20Mentah</h5>', _0x1f7e92 += _0x2a1d42(0x3f3);
        let _0x210f43 = {};
        _0xbdf1b3 === _0x2a1d42(0x24d) ? (_0x210f43 = _0x4ae77b['inputs'] || {}, !_0x4ae77b[_0x2a1d42(0x2d2)] && (_0x4ae77b[_0x2a1d42(0x173)] || _0x4ae77b['lirik']) && (_0x210f43 = {
            'tema': _0x4ae77b[_0x2a1d42(0x173)],
            'bahasa': _0x4ae77b[_0x2a1d42(0x311)],
            'vokalis': _0x4ae77b[_0x2a1d42(0x3c6)],
            'genre': _0x4ae77b['gaya']
        })) : _0x210f43 = _0x4ae77b[_0x2a1d42(0x1cf)] || {};
        const _0xfc4325 = Object[_0x2a1d42(0x2c2)](_0x210f43);
        _0x4ae77b['aspect_ratio'] && (_0x1f7e92 += _0x38bbb4(_0x2a1d42(0x218), _0x4ae77b[_0x2a1d42(0x33f)]));
        _0xfc4325[_0x2a1d42(0x315)] === 0x0 && !_0x4ae77b[_0x2a1d42(0x33f)] ? _0x1f7e92 += _0x2a1d42(0x15c) : _0xfc4325[_0x2a1d42(0x232)](_0x4dc83e => {
            const _0x19825f = _0x2a1d42;
            if ((_0x4dc83e[_0x19825f(0x17b)](_0x19825f(0x33a)) || _0x4dc83e === _0x19825f(0x2dc)) && !_0x210f43[_0x4dc83e])
                return;
            _0x1f7e92 += _0x38bbb4(_0x56a443(_0x4dc83e), _0x210f43[_0x4dc83e]);
        });
        _0x1f7e92 += _0x2a1d42(0x203), _0x1f7e92 += '<h5\x20class=\x22font-bold\x20text-accent-color\x20mb-2\x20uppercase\x20tracking-wider\x20text-xs\x22>Hasil\x20Prompt</h5>', _0x1f7e92 += '<div\x20class=\x22bg-code-bg\x20text-code-text\x20p-4\x20rounded-lg\x20font-mono\x20text-xs\x20overflow-x-auto\x20border\x20border-border-color\x22>';
        let _0x373185 = '';
        if (_0xbdf1b3 === _0x2a1d42(0x24d)) {
            const _0x4dbbde = _0x4ae77b[_0x2a1d42(0x355)] || _0x4ae77b;
            if (_0x4dbbde[_0x2a1d42(0x3eb)])
                _0x373185 += '[LIRIK]\x0a' + formatLyrics(_0x4dbbde[_0x2a1d42(0x3eb)]) + '\x0a\x0a';
            if (_0x4dbbde['gaya'])
                _0x373185 += _0x2a1d42(0x23e) + _0x4dbbde[_0x2a1d42(0x1ff)] + '\x0a\x0a';
            if (_0x4dbbde[_0x2a1d42(0x155)])
                _0x373185 += _0x2a1d42(0x22f) + (Array[_0x2a1d42(0x34f)](_0x4dbbde['judul']) ? _0x4dbbde['judul'][_0x2a1d42(0x212)](',\x20') : _0x4dbbde[_0x2a1d42(0x155)]) + '\x0a\x0a';
            if (_0x4dbbde[_0x2a1d42(0x215)])
                _0x373185 += _0x2a1d42(0x183) + _0x4dbbde[_0x2a1d42(0x215)];
        } else
            _0x373185 = _0x4ae77b[_0x2a1d42(0x40f)] || 'Tidak\x20ada\x20prompt\x20output.';
        return _0x1f7e92 += '<pre\x20class=\x22preserve-whitespace\x22>' + _0x373185 + _0x2a1d42(0x142), _0x1f7e92 += _0x2a1d42(0x203), _0x1f7e92;
    }
    function _0x4c1186(_0x4beb5a, _0x13532f = '', _0x57bbac = null) {
        const _0x4a03c3 = _0x526209, _0xf80c17 = _0x5615c8['previewModal'], _0x46ade1 = _0xf80c17[_0x4a03c3(0x338)](_0x4a03c3(0x38f));
        _0x4beb5a ? (_0x5615c8[_0x4a03c3(0x1b3)]['innerHTML'] = _0x13532f, _0x57bbac ? (_0x5615c8[_0x4a03c3(0x380)][_0x4a03c3(0x21f)] = () => {
            _0x4b2d07(_0x57bbac), _0x4c1186(![]);
        }, _0x5615c8['usePreviewBtn']['classList']['remove'](_0x4a03c3(0x1f3))) : _0x5615c8[_0x4a03c3(0x380)][_0x4a03c3(0x389)][_0x4a03c3(0x3ea)](_0x4a03c3(0x1f3)), _0xf80c17[_0x4a03c3(0x389)]['remove']('hidden'), void _0xf80c17[_0x4a03c3(0x3dd)], _0xf80c17[_0x4a03c3(0x389)][_0x4a03c3(0x3e6)](_0x4a03c3(0x266)), _0x46ade1['classList'][_0x4a03c3(0x3e6)](_0x4a03c3(0x3da)), _0x46ade1['classList'][_0x4a03c3(0x3ea)](_0x4a03c3(0x1e9))) : (_0xf80c17[_0x4a03c3(0x389)]['add'](_0x4a03c3(0x266)), _0x46ade1['classList'][_0x4a03c3(0x3e6)](_0x4a03c3(0x1e9)), _0x46ade1['classList']['add'](_0x4a03c3(0x3da)), setTimeout(() => {
            const _0x1a4cd2 = _0x4a03c3;
            _0xf80c17[_0x1a4cd2(0x389)]['add'](_0x1a4cd2(0x1f3)), _0x5615c8[_0x1a4cd2(0x1b3)][_0x1a4cd2(0x254)] = '', _0x5615c8[_0x1a4cd2(0x380)][_0x1a4cd2(0x21f)] = null;
        }, 0x12c));
    }
    function _0x1b7e2d() {
        const _0x13b600 = _0x526209;
        if (!_0x597f8b)
            return;
        const _0x2c5bb6 = _0x597f8b[_0x13b600(0x377)]([_0x13b600(0x2ee)], _0x13b600(0x3f0)), _0x595b9b = _0x2c5bb6[_0x13b600(0x2c5)]('prompts'), _0x3153ba = _0x595b9b[_0x13b600(0x208)]();
        _0x3153ba[_0x13b600(0x1c0)] = _0x1f57d3 => {
            const _0x551b83 = _0x13b600, _0x430f31 = _0x1f57d3['target']['result'];
            _0x5615c8[_0x551b83(0x18b)][_0x551b83(0x254)] = '';
            if (_0x430f31[_0x551b83(0x315)] === 0x0) {
                _0x5615c8[_0x551b83(0x18b)][_0x551b83(0x254)] = _0x551b83(0x326);
                return;
            }
            _0x430f31[_0x551b83(0x1cc)]()[_0x551b83(0x232)](_0x5612ea => {
                const _0x53baf1 = _0x551b83, _0x5a156c = document['createElement'](_0x53baf1(0x38f));
                _0x5a156c[_0x53baf1(0x282)] = _0x53baf1(0x120);
                const _0x1a9c39 = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22flex-1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22flex\x20items-center\x20gap-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22font-semibold\x20text-primary\x22>' + _0x5612ea['filename'] + _0x53baf1(0x265) + _0x5612ea[_0x53baf1(0x2ca)] + _0x53baf1(0x23b) + new Date(_0x5612ea[_0x53baf1(0x3fb)])['toLocaleString']() + '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', _0x118081 = _0x53baf1(0x279) + _0x5612ea['id'] + _0x53baf1(0x299) + _0x5612ea['id'] + _0x53baf1(0x292) + _0x5612ea['id'] + _0x53baf1(0x3ca) + _0x5612ea['id'] + '\x22\x20class=\x22btn\x20!bg-red-600\x20!hover:bg-red-700\x20!text-white\x20!border-red-800\x20!px-3\x20!py-1.5\x20text-xs\x20w-1/4\x20sm:w-auto\x20delete-prompt-btn\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20class=\x22h-4\x20w-4\x22\x20fill=\x22none\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20stroke=\x22currentColor\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22\x20stroke-width=\x222\x22\x20d=\x22M19\x207l-.867\x2012.142A2\x202\x200\x200116.138\x2021H7.862a2\x202\x200\x2001-1.995-1.858L5\x207m5\x204v6m4-6v6m1-10V4a1\x201\x200\x2000-1-1h-4a1\x201\x200\x2000-1\x201v3M4\x207h16\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20';
                _0x5a156c[_0x53baf1(0x254)] = _0x1a9c39 + _0x118081, _0x5615c8[_0x53baf1(0x18b)][_0x53baf1(0x1cd)](_0x5a156c);
            });
        }, _0x3153ba[_0x13b600(0x3b2)] = _0x49a7ca => {
            const _0x36bb19 = _0x13b600;
            console[_0x36bb19(0x318)]('Gagal\x20mengambil\x20riwayat\x20prompt:', _0x49a7ca['target']['errorCode']), _0x5615c8[_0x36bb19(0x18b)][_0x36bb19(0x254)] = _0x36bb19(0x2f6);
        };
    }
    function _0x59d2d6() {
        const _0x4c5e44 = _0x526209;
        _0x5615c8[_0x4c5e44(0x18b)]['addEventListener']('click', _0x5f3bd2 => {
            const _0x4ccabb = _0x4c5e44, _0x1edba8 = _0x5f3bd2[_0x4ccabb(0x3ae)][_0x4ccabb(0x3d7)](_0x4ccabb(0x39d));
            if (!_0x1edba8)
                return;
            const _0x5525c3 = parseInt(_0x1edba8[_0x4ccabb(0x264)](_0x4ccabb(0x31e)));
            if (!_0x5525c3)
                return;
            if (_0x1edba8['classList'][_0x4ccabb(0x13a)](_0x4ccabb(0x1f9))) {
                const _0x4bab7d = _0x597f8b[_0x4ccabb(0x377)]([_0x4ccabb(0x2ee)], _0x4ccabb(0x3f0)), _0x54694a = _0x4bab7d[_0x4ccabb(0x2c5)](_0x4ccabb(0x2ee)), _0x53bc08 = _0x54694a[_0x4ccabb(0x3fc)](_0x5525c3);
                _0x53bc08[_0x4ccabb(0x1c0)] = _0x2e7db5 => {
                    const _0x3c4783 = _0x4ccabb, _0x124a9f = _0x2e7db5[_0x3c4783(0x3ae)][_0x3c4783(0x3e1)];
                    if (_0x124a9f) {
                        const _0x9c69da = _0x4165ac(_0x124a9f);
                        _0x4c1186(!![], _0x9c69da, _0x5525c3);
                    }
                };
            }
            _0x1edba8['classList'][_0x4ccabb(0x13a)](_0x4ccabb(0x126)) && _0x4b2d07(_0x5525c3);
            if (_0x1edba8[_0x4ccabb(0x389)][_0x4ccabb(0x13a)](_0x4ccabb(0x15f))) {
                if (confirm('Apakah\x20Anda\x20yakin\x20ingin\x20menghapus\x20prompt\x20ini?')) {
                    const _0x949b0e = _0x597f8b[_0x4ccabb(0x377)](['prompts'], 'readwrite'), _0x545771 = _0x949b0e[_0x4ccabb(0x2c5)]('prompts'), _0x46da67 = _0x545771[_0x4ccabb(0x30e)](_0x5525c3);
                    _0x46da67[_0x4ccabb(0x1c0)] = () => _0x1b7e2d();
                }
            }
            if (_0x1edba8['classList'][_0x4ccabb(0x13a)](_0x4ccabb(0x2f7))) {
                const _0x3effc4 = _0x597f8b[_0x4ccabb(0x377)](['prompts'], _0x4ccabb(0x3f0)), _0x3dcb80 = _0x3effc4[_0x4ccabb(0x2c5)](_0x4ccabb(0x2ee)), _0x209240 = _0x3dcb80['get'](_0x5525c3);
                _0x209240[_0x4ccabb(0x1c0)] = _0x5dde1b => {
                    const _0x175f3e = _0x4ccabb, _0x576ae1 = _0x5dde1b[_0x175f3e(0x3ae)][_0x175f3e(0x3e1)];
                    if (_0x576ae1) {
                        const _0x34facb = new Date(_0x576ae1[_0x175f3e(0x3fb)]), _0x4d9d12 = _0x23fbfc => _0x23fbfc[_0x175f3e(0x2a7)]()[_0x175f3e(0x216)](0x2, '0'), _0x36044b = '' + _0x4d9d12(_0x34facb[_0x175f3e(0x24c)]()) + _0x4d9d12(_0x34facb[_0x175f3e(0x2ba)]() + 0x1) + _0x34facb[_0x175f3e(0x12e)]()[_0x175f3e(0x2a7)]()[_0x175f3e(0x277)](-0x2), _0xc04315 = '' + _0x4d9d12(_0x34facb[_0x175f3e(0x2f2)]()) + _0x4d9d12(_0x34facb['getMinutes']()), _0x5d1d45 = _0x576ae1[_0x175f3e(0x2ca)] + '_' + _0x36044b + '-' + _0xc04315 + _0x175f3e(0x1e1), _0x1e785a = new Blob([JSON['stringify'](_0x576ae1[_0x175f3e(0x281)], null, 0x2)], { 'type': 'application/json' }), _0x2179cb = URL[_0x175f3e(0x372)](_0x1e785a), _0x1bf184 = document[_0x175f3e(0x2b3)]('a');
                        _0x1bf184[_0x175f3e(0x37b)] = _0x2179cb, _0x1bf184[_0x175f3e(0x192)] = _0x5d1d45, document[_0x175f3e(0x39e)][_0x175f3e(0x1cd)](_0x1bf184), _0x1bf184[_0x175f3e(0x3a7)](), document[_0x175f3e(0x39e)][_0x175f3e(0x20e)](_0x1bf184), URL[_0x175f3e(0x13f)](_0x2179cb);
                    }
                };
            }
        }), _0x5615c8['exportPromptsButton'][_0x4c5e44(0x416)](_0x4c5e44(0x3a7), () => {
            const _0x40a135 = _0x4c5e44, _0x16769f = _0x597f8b[_0x40a135(0x377)](['prompts'], _0x40a135(0x3f0)), _0x26ba97 = _0x16769f['objectStore'](_0x40a135(0x2ee)), _0x32babe = _0x26ba97[_0x40a135(0x208)]();
            _0x32babe[_0x40a135(0x1c0)] = _0x2a2c01 => {
                const _0x5c3186 = _0x40a135, _0x5783e5 = _0x2a2c01[_0x5c3186(0x3ae)][_0x5c3186(0x3e1)], _0xf025bf = new Date(), _0x194f79 = _0x30e3f9 => _0x30e3f9['toString']()['padStart'](0x2, '0'), _0x336647 = '' + _0x194f79(_0xf025bf[_0x5c3186(0x24c)]()) + _0x194f79(_0xf025bf[_0x5c3186(0x2ba)]() + 0x1) + _0xf025bf['getFullYear']()[_0x5c3186(0x2a7)]()[_0x5c3186(0x277)](-0x2), _0x41c53f = 'data-prompt_' + _0x336647 + _0x5c3186(0x1e1), _0x4d3f8f = new Blob([JSON[_0x5c3186(0x367)](_0x5783e5, null, 0x2)], { 'type': _0x5c3186(0x334) }), _0xe17534 = URL[_0x5c3186(0x372)](_0x4d3f8f), _0x35ddea = document[_0x5c3186(0x2b3)]('a');
                _0x35ddea[_0x5c3186(0x37b)] = _0xe17534, _0x35ddea[_0x5c3186(0x192)] = _0x41c53f, document['body'][_0x5c3186(0x1cd)](_0x35ddea), _0x35ddea[_0x5c3186(0x3a7)](), document[_0x5c3186(0x39e)][_0x5c3186(0x20e)](_0x35ddea), URL[_0x5c3186(0x13f)](_0xe17534);
            };
        }), _0x5615c8[_0x4c5e44(0x313)][_0x4c5e44(0x416)]('change', _0x443861 => {
            const _0x23d50e = _0x4c5e44, _0x1426f4 = _0x443861[_0x23d50e(0x3ae)][_0x23d50e(0x225)][0x0];
            if (!_0x1426f4)
                return;
            const _0x52cf13 = new FileReader();
            _0x52cf13['onload'] = _0x33d01b => {
                const _0x527d07 = _0x23d50e;
                if (confirm(_0x527d07(0x34a)))
                    try {
                        const _0x578f33 = JSON['parse'](_0x33d01b[_0x527d07(0x3ae)]['result']), _0xbda12c = _0x597f8b['transaction'](['prompts'], _0x527d07(0x176)), _0x3d766f = _0xbda12c[_0x527d07(0x2c5)]('prompts');
                        _0x3d766f[_0x527d07(0x261)](), _0x578f33[_0x527d07(0x232)](_0x14a65c => {
                            const _0x2adc1f = _0x527d07;
                            delete _0x14a65c['id'], _0x3d766f[_0x2adc1f(0x3ea)](_0x14a65c);
                        }), _0xbda12c[_0x527d07(0x3e7)] = () => {
                            const _0x405cf7 = _0x527d07;
                            _0x1b7e2d(), alert(_0x578f33[_0x405cf7(0x315)] + _0x405cf7(0x1ab));
                        };
                    } catch (_0x1e3d50) {
                        alert(_0x527d07(0x1d1)), console[_0x527d07(0x318)](_0x527d07(0x2b6), _0x1e3d50);
                    }
            }, _0x52cf13['readAsText'](_0x1426f4), _0x443861[_0x23d50e(0x3ae)]['value'] = '';
        }), _0x5615c8[_0x4c5e44(0x197)][_0x4c5e44(0x416)](_0x4c5e44(0x3a7), _0x760392), _0x5615c8['saveLaguPromptButton'][_0x4c5e44(0x416)](_0x4c5e44(0x3a7), _0x760392), _0x5615c8[_0x4c5e44(0x35f)][_0x4c5e44(0x416)](_0x4c5e44(0x3a7), () => _0x31d52e(!![])), _0x5615c8['closeApiKeyModal']['addEventListener'](_0x4c5e44(0x3a7), () => {
            const _0x5e728a = _0x4c5e44;
            _0x31d52e(![]), _0x5615c8[_0x5e728a(0x3d4)]['dataset'][_0x5e728a(0x30f)] === 'desainer' && !_0x287814 && alert(_0x5e728a(0x3dc));
        }), _0x5615c8[_0x4c5e44(0x25d)][_0x4c5e44(0x416)](_0x4c5e44(0x3a7), () => {
            const _0x43a4a7 = _0x4c5e44, _0x44d678 = _0x5615c8[_0x43a4a7(0x26c)][_0x43a4a7(0x122)][_0x43a4a7(0x259)]();
            _0x44d678 ? (_0x287814 = _0x44d678, localStorage[_0x43a4a7(0x2ce)](_0x43a4a7(0x2ab), _0x44d678), _0x31d52e(![]), _0x5615c8[_0x43a4a7(0x3d4)][_0x43a4a7(0x316)][_0x43a4a7(0x30f)] === _0x43a4a7(0x21d) && _0x5cd723(_0x43a4a7(0x21d)), _0x5615c8[_0x43a4a7(0x14a)]['classList'][_0x43a4a7(0x3e6)](_0x43a4a7(0x1f3))) : (_0x5615c8['modalApiKeyInput'][_0x43a4a7(0x3ba)](), _0x5615c8[_0x43a4a7(0x26c)][_0x43a4a7(0x389)]['add'](_0x43a4a7(0x186)), setTimeout(() => _0x5615c8[_0x43a4a7(0x26c)][_0x43a4a7(0x389)]['remove']('border-red-500'), 0x7d0));
        }), _0x5615c8[_0x4c5e44(0x23c)]['addEventListener'](_0x4c5e44(0x3a7), () => {
            const _0x11fd6c = _0x4c5e44;
            confirm(_0x11fd6c(0x2c9)) && (_0x287814 = null, localStorage[_0x11fd6c(0x28f)](_0x11fd6c(0x2ab)), _0x5615c8[_0x11fd6c(0x26c)][_0x11fd6c(0x122)] = '', _0x5615c8[_0x11fd6c(0x23c)][_0x11fd6c(0x389)][_0x11fd6c(0x3ea)](_0x11fd6c(0x1f3)), alert('API\x20Key\x20berhasil\x20dihapus.'));
        }), _0x5615c8['themeToggle'][_0x4c5e44(0x416)](_0x4c5e44(0x3a7), () => {
            const _0x1227b3 = _0x4c5e44, _0xac9e0c = document[_0x1227b3(0x332)]['classList'][_0x1227b3(0x13a)](_0x1227b3(0x206)), _0xefb639 = _0xac9e0c ? _0x1227b3(0x151) : _0x1227b3(0x206);
            localStorage[_0x1227b3(0x2ce)](_0x1227b3(0x37a), _0xefb639), _0x5f14a7(_0xefb639);
        }), _0x5615c8['mainTabButtons'][_0x4c5e44(0x177)]['addEventListener'](_0x4c5e44(0x3a7), () => _0x5cd723(_0x4c5e44(0x177))), _0x5615c8['mainTabButtons'][_0x4c5e44(0x21d)][_0x4c5e44(0x416)]('click', () => _0x5cd723(_0x4c5e44(0x21d))), _0x5615c8[_0x4c5e44(0x1a5)][_0x4c5e44(0x2f0)][_0x4c5e44(0x416)]('click', () => _0x5cd723('riwayat')), _0x5615c8[_0x4c5e44(0x1c6)][_0x4c5e44(0x416)](_0x4c5e44(0x3a7), () => _0x423da5(_0x4c5e44(0x1e5))), _0x5615c8[_0x4c5e44(0x238)][_0x4c5e44(0x416)]('click', () => _0x423da5(_0x4c5e44(0x306))), _0x5615c8['designerTabLagu'][_0x4c5e44(0x416)]('click', () => _0x423da5(_0x4c5e44(0x24d)));
        const _0x3c1661 = document['getElementById'](_0x4c5e44(0x22a)), _0x58f845 = document['getElementById'](_0x4c5e44(0x37e));
        _0x3c1661[_0x4c5e44(0x416)](_0x4c5e44(0x194), () => {
            const _0x34ec4d = _0x4c5e44;
            _0x58f845['classList'][_0x34ec4d(0x148)](_0x34ec4d(0x1f3), _0x3c1661[_0x34ec4d(0x122)] !== _0x34ec4d(0x21b));
        });
        const _0x1d7ac1 = document['getElementById']('vokalis-lagu'), _0xc521a2 = document[_0x4c5e44(0x3ee)](_0x4c5e44(0x1df)), _0x9910da = document[_0x4c5e44(0x338)]('label[for=\x22output-lirik\x22]');
        _0x1d7ac1['addEventListener'](_0x4c5e44(0x194), () => {
            const _0x446dcc = _0x4c5e44, _0x107c27 = _0x1d7ac1[_0x446dcc(0x122)] === _0x446dcc(0x29f);
            _0xc521a2[_0x446dcc(0x389)][_0x446dcc(0x148)](_0x446dcc(0x1f3), !_0x107c27), _0x9910da && (_0x9910da[_0x446dcc(0x25e)] = _0x107c27 ? _0x446dcc(0x2ae) : _0x446dcc(0x128));
        });
        const _0x193b95 = document[_0x4c5e44(0x3ee)]('alat-musik-utama'), _0x116dac = document[_0x4c5e44(0x3ee)]('alat-musik-lainnya');
        _0x193b95[_0x4c5e44(0x416)](_0x4c5e44(0x194), () => {
            const _0x4fe508 = _0x4c5e44;
            _0x116dac['classList'][_0x4fe508(0x148)](_0x4fe508(0x1f3), _0x193b95[_0x4fe508(0x122)] !== _0x4fe508(0x1cb));
        }), _0x5615c8['allFormInputs'][_0x4c5e44(0x232)](_0x4cb912 => _0x4cb912['addEventListener'](_0x4c5e44(0x3e0), _0x1014f9)), _0x5615c8[_0x4c5e44(0x390)][_0x4c5e44(0x416)](_0x4c5e44(0x194), _0x423b0e);
        const _0x2d53f5 = () => {
            const _0x4e17c8 = _0x4c5e44;
            _0x5615c8['tujuanGambarEl'][_0x4e17c8(0x122)] = _0x4e17c8(0x3c3), _0x423b0e();
        };
        _0x5615c8['backToTujuanButton']['addEventListener'](_0x4c5e44(0x3a7), _0x2d53f5), _0x5615c8[_0x4c5e44(0x384)][_0x4c5e44(0x416)](_0x4c5e44(0x3a7), _0x2d53f5), _0x5615c8['importFromImageBtn'][_0x4c5e44(0x416)](_0x4c5e44(0x3a7), _0xd5935c), _0x5615c8['copyButton'][_0x4c5e44(0x416)](_0x4c5e44(0x3a7), () => {
            const _0x3b2187 = _0x4c5e44;
            _0x5615c8[_0x3b2187(0x360)][_0x3b2187(0x3a4)]();
            try {
                document[_0x3b2187(0x268)](_0x3b2187(0x1e2)), _0x5615c8[_0x3b2187(0x3c1)][_0x3b2187(0x25e)] = _0x3b2187(0x13d), setTimeout(() => {
                    const _0x153124 = _0x3b2187;
                    _0x5615c8['copyButton'][_0x153124(0x25e)] = _0x153124(0x3f9);
                }, 0x7d0);
            } catch (_0x40610a) {
                _0x5615c8[_0x3b2187(0x3c1)][_0x3b2187(0x25e)] = _0x3b2187(0x188);
            }
        }), _0x5615c8[_0x4c5e44(0x402)]['addEventListener']('click', _0xa8de0c), _0x5615c8[_0x4c5e44(0x1c9)]['addEventListener'](_0x4c5e44(0x3a7), _0x231c31), _0x5615c8['copyJsonButton'][_0x4c5e44(0x416)](_0x4c5e44(0x3a7), () => {
            const _0xfd4b5c = _0x4c5e44;
            _0x5615c8[_0xfd4b5c(0x2be)][_0xfd4b5c(0x3a4)]();
            try {
                document['execCommand']('copy'), _0x5615c8[_0xfd4b5c(0x248)][_0xfd4b5c(0x25e)] = _0xfd4b5c(0x13d), setTimeout(() => {
                    const _0x57beda = _0xfd4b5c;
                    _0x5615c8[_0x57beda(0x248)][_0x57beda(0x25e)] = 'SALIN';
                }, 0x7d0);
            } catch (_0x9ac151) {
                _0x5615c8[_0xfd4b5c(0x248)][_0xfd4b5c(0x25e)] = _0xfd4b5c(0x188);
            }
        }), _0x5615c8['imageUploadEl'][_0x4c5e44(0x416)](_0x4c5e44(0x194), _0x32a069 => _0x17731d(_0x32a069[_0x4c5e44(0x3ae)]['files'][0x0], _0x4c5e44(0x286))), _0x5615c8[_0x4c5e44(0x170)]['addEventListener'](_0x4c5e44(0x162), _0x5908ae => {
            const _0x204fec = _0x4c5e44;
            _0x5908ae[_0x204fec(0x405)](), _0x17731d(_0x5908ae['dataTransfer']['files'][0x0], _0x204fec(0x286));
        }), _0x5615c8[_0x4c5e44(0x422)][_0x4c5e44(0x416)](_0x4c5e44(0x194), _0x3f44c4 => _0x17731d(_0x3f44c4[_0x4c5e44(0x3ae)][_0x4c5e44(0x225)][0x0], _0x4c5e44(0x3df))), _0x5615c8[_0x4c5e44(0x157)]['addEventListener'](_0x4c5e44(0x162), _0x1d9132 => {
            const _0xd585ce = _0x4c5e44;
            _0x1d9132['preventDefault'](), _0x17731d(_0x1d9132[_0xd585ce(0x242)]['files'][0x0], _0xd585ce(0x3df));
        }), _0x5615c8['imageUploadCompose2']['addEventListener'](_0x4c5e44(0x194), _0xdd1c1b => _0x17731d(_0xdd1c1b['target'][_0x4c5e44(0x225)][0x0], _0x4c5e44(0x39c))), _0x5615c8[_0x4c5e44(0x15b)]['addEventListener'](_0x4c5e44(0x162), _0x15a0e3 => {
            const _0xafe6ae = _0x4c5e44;
            _0x15a0e3['preventDefault'](), _0x17731d(_0x15a0e3['dataTransfer']['files'][0x0], _0xafe6ae(0x39c));
        }), _0x5615c8['imageUploadChar'][_0x4c5e44(0x416)](_0x4c5e44(0x194), _0x2b173b => _0x17731d(_0x2b173b[_0x4c5e44(0x3ae)][_0x4c5e44(0x225)][0x0], 'character')), _0x5615c8[_0x4c5e44(0x365)][_0x4c5e44(0x416)]('drop', _0x42a4b7 => {
            const _0x3f6572 = _0x4c5e44;
            _0x42a4b7['preventDefault'](), _0x17731d(_0x42a4b7[_0x3f6572(0x242)][_0x3f6572(0x225)][0x0], _0x3f6572(0x382));
        }), [
            _0x4c5e44(0x1e7),
            _0x4c5e44(0x3b7)
        ]['forEach'](_0x20e5b6 => {
            const _0x5d4d65 = _0x4c5e44;
            [
                _0x5615c8[_0x5d4d65(0x170)],
                _0x5615c8['dropZoneCompose1'],
                _0x5615c8['dropZoneCompose2'],
                _0x5615c8[_0x5d4d65(0x269)],
                _0x5615c8['dropZoneChar']
            ][_0x5d4d65(0x232)](_0x8bb13c => {
                _0x8bb13c['addEventListener'](_0x20e5b6, _0x175e37 => {
                    const _0x5262fe = a0_0x38c0;
                    _0x175e37[_0x5262fe(0x405)]();
                    if (_0x20e5b6 === _0x5262fe(0x1e7))
                        _0x8bb13c[_0x5262fe(0x389)][_0x5262fe(0x3ea)]('border-accent-color', _0x5262fe(0x2da));
                    else
                        _0x8bb13c[_0x5262fe(0x389)][_0x5262fe(0x3e6)]('border-accent-color', _0x5262fe(0x2da));
                });
            });
        }), _0x5615c8[_0x4c5e44(0x158)][_0x4c5e44(0x416)]('click', () => {
            const _0x502b1e = _0x4c5e44;
            _0x3526ae = null, _0x5615c8['imageUploadEl'][_0x502b1e(0x122)] = '', _0x5615c8[_0x502b1e(0x2a3)][_0x502b1e(0x389)][_0x502b1e(0x3ea)](_0x502b1e(0x1f3)), _0x5615c8['produkGambarEl'][_0x502b1e(0x122)] = '', _0x5615c8[_0x502b1e(0x235)][_0x502b1e(0x122)] = '', _0x5615c8[_0x502b1e(0x251)][_0x502b1e(0x122)] = '', _0x423b0e();
        }), _0x5615c8['removeCompose1']['addEventListener']('click', () => {
            const _0x44e071 = _0x4c5e44;
            _0x58b497 = null, _0x5615c8[_0x44e071(0x422)][_0x44e071(0x122)] = '', _0x5615c8[_0x44e071(0x36e)][_0x44e071(0x267)] = '', _0x5615c8[_0x44e071(0x36e)][_0x44e071(0x1bb)]['classList'][_0x44e071(0x3ea)](_0x44e071(0x1f3)), _0x1014f9();
        }), _0x5615c8[_0x4c5e44(0x199)][_0x4c5e44(0x416)](_0x4c5e44(0x3a7), () => {
            const _0x5eda37 = _0x4c5e44;
            _0x42471b = null, _0x5615c8[_0x5eda37(0x296)]['value'] = '', _0x5615c8[_0x5eda37(0x140)][_0x5eda37(0x267)] = '', _0x5615c8['uploadedComposePreview2'][_0x5eda37(0x1bb)][_0x5eda37(0x389)][_0x5eda37(0x3ea)](_0x5eda37(0x1f3)), _0x1014f9();
        }), _0x5615c8[_0x4c5e44(0x14b)][_0x4c5e44(0x416)](_0x4c5e44(0x3a7), () => {
            const _0x1436be = _0x4c5e44;
            _0x47d8f9 = null, _0x5615c8[_0x1436be(0x429)][_0x1436be(0x122)] = '', _0x5615c8[_0x1436be(0x3f7)][_0x1436be(0x389)][_0x1436be(0x3ea)](_0x1436be(0x1f3)), _0x5615c8['uploadedCharPreview'][_0x1436be(0x267)] = '';
        }), _0x5615c8[_0x4c5e44(0x2eb)][_0x4c5e44(0x416)](_0x4c5e44(0x3a7), _0x7fe095), _0x5615c8[_0x4c5e44(0x1e4)][_0x4c5e44(0x416)]('click', _0x154dcb), _0x5615c8['analyzeVideoImageButton'][_0x4c5e44(0x416)](_0x4c5e44(0x3a7), _0x63d464), _0x5615c8[_0x4c5e44(0x1c7)][_0x4c5e44(0x416)](_0x4c5e44(0x3a7), _0x5a8840), _0x5615c8[_0x4c5e44(0x172)][_0x4c5e44(0x416)](_0x4c5e44(0x3a7), () => _0x5563c7(_0x4c5e44(0x3eb))), _0x5615c8[_0x4c5e44(0x1a3)][_0x4c5e44(0x416)](_0x4c5e44(0x3a7), () => _0x5563c7(_0x4c5e44(0x1ff))), _0x5615c8['regenJudulButton']['addEventListener'](_0x4c5e44(0x3a7), () => _0x5563c7(_0x4c5e44(0x155))), _0x5615c8['regenAlternatifButton'][_0x4c5e44(0x416)](_0x4c5e44(0x3a7), _0x1f32b2), _0x5615c8[_0x4c5e44(0x123)][_0x4c5e44(0x416)]('click', () => {
            const _0x19b4ff = _0x4c5e44;
            _0x5615c8[_0x19b4ff(0x35b)]['select']();
            try {
                document[_0x19b4ff(0x268)](_0x19b4ff(0x1e2)), _0x5615c8[_0x19b4ff(0x123)][_0x19b4ff(0x25e)] = _0x19b4ff(0x13d), setTimeout(() => {
                    const _0x2e28db = _0x19b4ff;
                    _0x5615c8['copyLirikButton']['textContent'] = _0x2e28db(0x3f9);
                }, 0x7d0);
            } catch (_0x10b430) {
                _0x5615c8[_0x19b4ff(0x123)][_0x19b4ff(0x25e)] = _0x19b4ff(0x188);
            }
        }), _0x5615c8[_0x4c5e44(0x134)][_0x4c5e44(0x416)](_0x4c5e44(0x3a7), () => {
            const _0x4c6ac9 = _0x4c5e44;
            _0x5615c8[_0x4c6ac9(0x427)][_0x4c6ac9(0x3a4)]();
            try {
                document[_0x4c6ac9(0x268)]('copy'), _0x5615c8[_0x4c6ac9(0x134)][_0x4c6ac9(0x25e)] = _0x4c6ac9(0x13d), setTimeout(() => {
                    const _0x22bf1a = _0x4c6ac9;
                    _0x5615c8[_0x22bf1a(0x134)][_0x22bf1a(0x25e)] = 'SALIN';
                }, 0x7d0);
            } catch (_0x34f6d3) {
                _0x5615c8[_0x4c6ac9(0x134)][_0x4c6ac9(0x25e)] = _0x4c6ac9(0x188);
            }
        }), _0x5615c8['copyAlternatifButton']['addEventListener'](_0x4c5e44(0x3a7), () => {
            const _0x14c9bb = _0x4c5e44;
            _0x5615c8['outputAlternatif'][_0x14c9bb(0x3a4)]();
            try {
                document[_0x14c9bb(0x268)]('copy'), _0x5615c8[_0x14c9bb(0x2a9)]['textContent'] = 'DISALIN!', setTimeout(() => {
                    const _0xd994af = _0x14c9bb;
                    _0x5615c8[_0xd994af(0x2a9)][_0xd994af(0x25e)] = _0xd994af(0x3f9);
                }, 0x7d0);
            } catch (_0x10562c) {
                _0x5615c8['copyAlternatifButton']['textContent'] = _0x14c9bb(0x188);
            }
        });
        function _0x1f32b2() {
            const _0x12bdc4 = _0x4c5e44, _0x1175b5 = document[_0x12bdc4(0x3ee)]('tema-lagu')[_0x12bdc4(0x122)][_0x12bdc4(0x259)](), _0x21845c = document[_0x12bdc4(0x3ee)](_0x12bdc4(0x22a));
            let _0x582de8 = _0x21845c[_0x12bdc4(0x122)];
            _0x582de8 === _0x12bdc4(0x21b) && (_0x582de8 = document[_0x12bdc4(0x3ee)](_0x12bdc4(0x37e))[_0x12bdc4(0x122)][_0x12bdc4(0x259)]());
            const _0x2c2702 = document[_0x12bdc4(0x3ee)](_0x12bdc4(0x21a))['value'];
            let _0x57a352 = _0x5615c8[_0x12bdc4(0x3e3)][_0x12bdc4(0x122)][_0x12bdc4(0x259)](), _0x1a6e21 = _0x5615c8['genreKombinasiSearch'][_0x12bdc4(0x122)][_0x12bdc4(0x259)]();
            const _0x540070 = document['getElementById']('input-lainnya-lagu')[_0x12bdc4(0x122)][_0x12bdc4(0x259)](), _0x29f30d = _0x12bdc4(0x22b) + (_0x1175b5 || 'Tidak\x20diisi') + _0x12bdc4(0x1d5) + (_0x582de8 || _0x12bdc4(0x17c)) + _0x12bdc4(0x38b) + (_0x2c2702 || 'Tidak\x20diisi') + '),\x20Genre\x20Utama:(' + (_0x57a352 || _0x12bdc4(0x17c)) + '),\x20Genre\x20Kombinasi:(' + (_0x1a6e21 || _0x12bdc4(0x363)) + _0x12bdc4(0x392) + (_0x540070 || _0x12bdc4(0x363)) + ')';
            _0x5615c8['outputAlternatif'][_0x12bdc4(0x122)] = _0x29f30d;
        }
        async function _0x5a8840() {
            const _0x4b912f = _0x4c5e44, _0x4a892a = document['getElementById'](_0x4b912f(0x204))[_0x4b912f(0x122)][_0x4b912f(0x259)]();
            if (!_0x4a892a) {
                alert(_0x4b912f(0x276));
                return;
            }
            _0x5615c8[_0x4b912f(0x1c7)][_0x4b912f(0x41b)] = !![], _0x5615c8[_0x4b912f(0x1c7)][_0x4b912f(0x254)] = _0x4b912f(0x22c), _0x5615c8[_0x4b912f(0x35b)][_0x4b912f(0x122)] = _0x4b912f(0x3d0), _0x5615c8['outputGaya'][_0x4b912f(0x122)] = _0x4b912f(0x209), _0x243f87([]);
            const _0x2271b9 = document[_0x4b912f(0x3ee)](_0x4b912f(0x22a));
            let _0xde00c5 = _0x2271b9[_0x4b912f(0x122)];
            _0xde00c5 === _0x4b912f(0x21b) && (_0xde00c5 = document[_0x4b912f(0x3ee)](_0x4b912f(0x37e))[_0x4b912f(0x122)][_0x4b912f(0x259)]());
            const _0x4a0f79 = document['getElementById'](_0x4b912f(0x21a))['value'];
            let _0xa12171 = _0x5615c8['genreUtamaSearch']['value']['trim'](), _0x32d0b2 = _0x5615c8['genreKombinasiSearch'][_0x4b912f(0x122)][_0x4b912f(0x259)]();
            const _0x1c8fc8 = document[_0x4b912f(0x3ee)]('input-lainnya-lagu')['value'][_0x4b912f(0x259)](), _0x458c84 = document[_0x4b912f(0x3ee)](_0x4b912f(0x139))['value'];
            let _0x5e2622, _0x17fee9, _0xfd974f;
            const _0x347d65 = _0x4a0f79 === 'Instrumental';
            if (_0x347d65) {
                const _0x3361f4 = document[_0x4b912f(0x3ee)](_0x4b912f(0x1dd));
                let _0x3dc31b = _0x3361f4[_0x4b912f(0x122)];
                _0x3dc31b === _0x4b912f(0x1cb) && (_0x3dc31b = document[_0x4b912f(0x3ee)]('alat-musik-lainnya')['value'][_0x4b912f(0x259)]()), _0x5e2622 = _0x4b912f(0x16f), _0x17fee9 = _0x4b912f(0x398) + _0x4a892a + ',\x20Alat\x20Musik\x20Utama:\x20' + _0x3dc31b + _0x4b912f(0x207) + _0xa12171 + ',\x20Genre\x20Kombinasi:\x20' + (_0x32d0b2 || _0x4b912f(0x363)) + _0x4b912f(0x1fb) + (_0x1c8fc8 || _0x4b912f(0x363)), _0xfd974f = {
                    'type': _0x4b912f(0x3c2),
                    'properties': {
                        'lirik': {
                            'type': _0x4b912f(0x19f),
                            'description': 'Sebuah\x20puisi\x20yang\x20sesuai\x20dengan\x20tema.'
                        },
                        'gaya': {
                            'type': _0x4b912f(0x19f),
                            'description': _0x4b912f(0x222) + _0x458c84 + _0x4b912f(0x41c)
                        },
                        'judul_lagu': {
                            'type': _0x4b912f(0x1c5),
                            'items': { 'type': _0x4b912f(0x19f) }
                        }
                    },
                    'required': [
                        'lirik',
                        'gaya',
                        _0x4b912f(0x30d)
                    ]
                };
            } else
                _0x5e2622 = _0x4b912f(0x167), _0x17fee9 = _0x4b912f(0x301) + _0x4a892a + _0x4b912f(0x2ec) + _0xde00c5 + ',\x20Vokalis:\x20' + _0x4a0f79 + ',\x20Genre\x20Utama:\x20' + _0xa12171 + _0x4b912f(0x3b8) + (_0x32d0b2 || 'Tidak\x20ada') + _0x4b912f(0x1fb) + (_0x1c8fc8 || _0x4b912f(0x363)), _0xfd974f = {
                    'type': _0x4b912f(0x3c2),
                    'properties': {
                        'lirik': {
                            'type': _0x4b912f(0x19f),
                            'description': _0x4b912f(0x28e)
                        },
                        'gaya': {
                            'type': _0x4b912f(0x19f),
                            'description': _0x4b912f(0x37d) + _0x458c84 + '\x20karakter.'
                        },
                        'judul_lagu': {
                            'type': 'ARRAY',
                            'items': { 'type': _0x4b912f(0x19f) }
                        }
                    },
                    'required': [
                        'lirik',
                        _0x4b912f(0x1ff),
                        _0x4b912f(0x30d)
                    ]
                };
            try {
                const _0x19a890 = await _0x36852b(_0x5e2622, _0x17fee9, !![], _0xfd974f), _0x4ebe28 = JSON['parse'](_0x19a890);
                if (_0x4ebe28[_0x4b912f(0x3eb)] && _0x4ebe28[_0x4b912f(0x1ff)] && _0x4ebe28[_0x4b912f(0x30d)])
                    _0x5615c8[_0x4b912f(0x35b)]['value'] = formatLyrics(_0x4ebe28[_0x4b912f(0x3eb)]), _0x5615c8[_0x4b912f(0x427)][_0x4b912f(0x122)] = _0x4ebe28[_0x4b912f(0x1ff)], _0x243f87(_0x4ebe28[_0x4b912f(0x30d)]), _0x1f32b2();
                else
                    throw new Error(_0x4b912f(0x2e1));
            } catch (_0x3adaa8) {
                _0x5615c8[_0x4b912f(0x35b)][_0x4b912f(0x122)] = _0x4b912f(0x415) + _0x3adaa8['message'], _0x5615c8[_0x4b912f(0x427)]['value'] = _0x4b912f(0x2b7), _0x243f87([_0x4b912f(0x27d)]);
            } finally {
                _0x5615c8[_0x4b912f(0x1c7)][_0x4b912f(0x41b)] = ![], _0x5615c8[_0x4b912f(0x1c7)][_0x4b912f(0x254)] = _0x4b912f(0x1a0);
            }
        }
        async function _0x5563c7(_0x14d1b5) {
            const _0x3918ee = _0x4c5e44, _0x353ee6 = document[_0x3918ee(0x3ee)](_0x3918ee(0x204))[_0x3918ee(0x122)][_0x3918ee(0x259)]();
            if (!_0x353ee6) {
                alert(_0x3918ee(0x276));
                return;
            }
            let _0xfcc66b, _0x1be670, _0x8c7d4d, _0x2d8d9d, _0x4a6619, _0x28a68e;
            const _0x4fa123 = document[_0x3918ee(0x3ee)](_0x3918ee(0x22a));
            let _0x53b774 = _0x4fa123[_0x3918ee(0x122)];
            _0x53b774 === _0x3918ee(0x21b) && (_0x53b774 = document[_0x3918ee(0x3ee)]('bahasa-lagu-lainnya')['value'][_0x3918ee(0x259)]());
            const _0x509bed = document[_0x3918ee(0x3ee)]('vokalis-lagu')[_0x3918ee(0x122)];
            let _0x3e89a9 = _0x5615c8['genreUtamaSearch'][_0x3918ee(0x122)]['trim'](), _0x5c15e8 = _0x5615c8[_0x3918ee(0x3fd)][_0x3918ee(0x122)]['trim']();
            const _0x35c00d = document[_0x3918ee(0x3ee)]('input-lainnya-lagu')[_0x3918ee(0x122)]['trim'](), _0x4bc8c3 = document[_0x3918ee(0x3ee)](_0x3918ee(0x139))[_0x3918ee(0x122)], _0x13bc40 = _0x509bed === 'Instrumental';
            let _0x4ef030;
            if (_0x13bc40) {
                const _0x45ac52 = document[_0x3918ee(0x3ee)](_0x3918ee(0x1dd));
                let _0x292750 = _0x45ac52[_0x3918ee(0x122)];
                _0x292750 === _0x3918ee(0x1cb) && (_0x292750 = document['getElementById'](_0x3918ee(0x15a))[_0x3918ee(0x122)][_0x3918ee(0x259)]()), _0x4ef030 = _0x3918ee(0x27c) + _0x353ee6 + _0x3918ee(0x1f0) + _0x292750 + _0x3918ee(0x207) + _0x3e89a9 + ',\x20Genre\x20Kombinasi:\x20' + (_0x5c15e8 || _0x3918ee(0x363)) + _0x3918ee(0x1fb) + (_0x35c00d || 'Tidak\x20ada') + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20-\x20Puisi\x20Saat\x20Ini:\x20' + _0x5615c8[_0x3918ee(0x35b)][_0x3918ee(0x122)] + _0x3918ee(0x42c) + _0x5615c8[_0x3918ee(0x427)]['value'];
            } else
                _0x4ef030 = _0x3918ee(0x27c) + _0x353ee6 + ',\x20Bahasa:\x20' + _0x53b774 + _0x3918ee(0x31c) + _0x509bed + _0x3918ee(0x207) + _0x3e89a9 + _0x3918ee(0x3b8) + (_0x5c15e8 || _0x3918ee(0x363)) + _0x3918ee(0x1fb) + (_0x35c00d || _0x3918ee(0x363)) + _0x3918ee(0x370) + _0x5615c8[_0x3918ee(0x35b)][_0x3918ee(0x122)] + _0x3918ee(0x42c) + _0x5615c8[_0x3918ee(0x427)]['value'];
            switch (_0x14d1b5) {
            case 'lirik':
                _0xfcc66b = _0x5615c8[_0x3918ee(0x172)], _0x1be670 = _0x3918ee(0x34d), _0x8c7d4d = _0x13bc40 ? _0x3918ee(0x1a1) : _0x3918ee(0x28b), _0x5615c8[_0x3918ee(0x35b)][_0x3918ee(0x122)] = _0x3918ee(0x1fa) + (_0x13bc40 ? _0x3918ee(0x236) : 'lirik') + _0x3918ee(0x220), _0x4a6619 = _0x13bc40 ? _0x3918ee(0x431) : _0x3918ee(0x1ca), _0x28a68e = _0x3918ee(0x18e) + (_0x13bc40 ? _0x3918ee(0x236) : _0x3918ee(0x3eb)) + _0x3918ee(0x180) + _0x4ef030, _0x2d8d9d = {
                    'type': _0x3918ee(0x3c2),
                    'properties': { 'lirik': { 'type': _0x3918ee(0x19f) } },
                    'required': [_0x3918ee(0x3eb)]
                };
                break;
            case _0x3918ee(0x1ff):
                _0xfcc66b = _0x5615c8[_0x3918ee(0x1a3)], _0x1be670 = _0x3918ee(0x34d), _0x8c7d4d = _0x3918ee(0x3a8), _0x5615c8['outputGaya']['value'] = _0x3918ee(0x320), _0x4a6619 = _0x3918ee(0x20c), _0x28a68e = _0x3918ee(0x327) + _0x4ef030, _0x2d8d9d = {
                    'type': _0x3918ee(0x3c2),
                    'properties': { 'gaya': { 'type': _0x3918ee(0x19f) } },
                    'required': [_0x3918ee(0x1ff)]
                };
                break;
            case 'judul':
                _0xfcc66b = _0x5615c8[_0x3918ee(0x340)], _0x1be670 = _0x3918ee(0x34d), _0x8c7d4d = 'MEMBUAT\x20JUDUL...', _0x243f87([]), _0x4a6619 = _0x3918ee(0x34b), _0x28a68e = _0x3918ee(0x2bc) + _0x4ef030, _0x2d8d9d = {
                    'type': _0x3918ee(0x3c2),
                    'properties': {
                        'judul_lagu': {
                            'type': _0x3918ee(0x1c5),
                            'items': { 'type': _0x3918ee(0x19f) }
                        }
                    },
                    'required': [_0x3918ee(0x30d)]
                };
                break;
            }
            _0xfcc66b[_0x3918ee(0x41b)] = !![], _0xfcc66b[_0x3918ee(0x25e)] = _0x8c7d4d;
            try {
                const _0x14dfc5 = await _0x36852b(_0x4a6619, _0x28a68e, !![], _0x2d8d9d), _0xcf16cd = JSON[_0x3918ee(0x1d4)](_0x14dfc5);
                if (_0x14d1b5 === _0x3918ee(0x3eb) && _0xcf16cd[_0x3918ee(0x3eb)])
                    _0x5615c8[_0x3918ee(0x35b)][_0x3918ee(0x122)] = formatLyrics(_0xcf16cd[_0x3918ee(0x3eb)]);
                else {
                    if (_0x14d1b5 === _0x3918ee(0x1ff) && _0xcf16cd[_0x3918ee(0x1ff)])
                        _0x5615c8[_0x3918ee(0x427)]['value'] = _0xcf16cd[_0x3918ee(0x1ff)];
                    else {
                        if (_0x14d1b5 === _0x3918ee(0x155) && _0xcf16cd['judul_lagu'])
                            _0x243f87(_0xcf16cd[_0x3918ee(0x30d)]);
                        else
                            throw new Error('Respons\x20tidak\x20sesuai\x20format.');
                    }
                }
            } catch (_0x2082de) {
                if (_0x14d1b5 === _0x3918ee(0x3eb))
                    _0x5615c8[_0x3918ee(0x35b)][_0x3918ee(0x122)] = _0x3918ee(0x19a) + _0x2082de['message'];
                if (_0x14d1b5 === _0x3918ee(0x1ff))
                    _0x5615c8[_0x3918ee(0x427)]['value'] = _0x3918ee(0x19a) + _0x2082de[_0x3918ee(0x145)];
                if (_0x14d1b5 === 'judul')
                    _0x243f87(['Gagal.']);
            } finally {
                _0xfcc66b[_0x3918ee(0x41b)] = ![], _0xfcc66b[_0x3918ee(0x25e)] = _0x1be670;
            }
        }
        _0x5615c8[_0x4c5e44(0x234)]['addEventListener'](_0x4c5e44(0x194), _0x2c96ad => {
            const _0x14a895 = _0x4c5e44;
            _0x42856f(_0x2c96ad['target'][_0x14a895(0x225)][0x0]);
        }), _0x5615c8[_0x4c5e44(0x269)][_0x4c5e44(0x416)](_0x4c5e44(0x162), _0xd84983 => {
            const _0x4194e0 = _0x4c5e44;
            _0xd84983[_0x4194e0(0x405)](), _0x42856f(_0xd84983[_0x4194e0(0x242)][_0x4194e0(0x225)][0x0]);
        }), _0x5615c8[_0x4c5e44(0x1a4)]['addEventListener'](_0x4c5e44(0x194), _0x28415f => _0x560037(_0x28415f[_0x4c5e44(0x3ae)][_0x4c5e44(0x225)][0x0])), _0x5615c8['removeVideoButton']['addEventListener']('click', () => {
            const _0x4fbeff = _0x4c5e44;
            _0x101ab1 = null, _0x134009 = null, _0x5615c8[_0x4fbeff(0x234)]['value'] = '', _0x5615c8[_0x4fbeff(0x133)][_0x4fbeff(0x389)][_0x4fbeff(0x3ea)]('hidden'), _0x5615c8['videoImageAnalysisResult']['classList'][_0x4fbeff(0x3ea)](_0x4fbeff(0x1f3)), _0x5615c8[_0x4fbeff(0x146)][_0x4fbeff(0x122)] = '', _0x1014f9();
        }), _0x5615c8[_0x4c5e44(0x14a)]['addEventListener'](_0x4c5e44(0x3a7), () => {
            const _0x3dbcb9 = _0x4c5e44;
            _0x364b68(_0x3dbcb9(0x3ff)) && _0x12795c();
        }), _0x5615c8[_0x4c5e44(0x2b4)]['addEventListener'](_0x4c5e44(0x3a7), _0x12795c), _0x5615c8['closePreviewModal'][_0x4c5e44(0x416)](_0x4c5e44(0x3a7), () => _0x4c1186(![])), _0x5615c8['closePreviewBtnSecondary']['addEventListener'](_0x4c5e44(0x3a7), () => _0x4c1186(![])), _0x5615c8[_0x4c5e44(0x2f8)]['addEventListener']('click', _0x2a359a => {
            const _0x41e281 = _0x4c5e44;
            if (_0x2a359a[_0x41e281(0x3ae)] === _0x5615c8['previewModal'])
                _0x4c1186(![]);
        }), _0x5615c8[_0x4c5e44(0x356)][_0x4c5e44(0x416)]('click', _0x1dde37), _0x5615c8[_0x4c5e44(0x3cc)]['addEventListener'](_0x4c5e44(0x323), _0x498c73 => {
            const _0x322bb4 = _0x4c5e44;
            if (_0x498c73[_0x322bb4(0x2cd)] === _0x322bb4(0x354))
                _0x1dde37();
        }), _0x5615c8[_0x4c5e44(0x272)][_0x4c5e44(0x416)](_0x4c5e44(0x3a7), () => _0x5615c8[_0x4c5e44(0x283)][_0x4c5e44(0x389)][_0x4c5e44(0x148)]('hidden')), _0x5615c8[_0x4c5e44(0x21e)][_0x4c5e44(0x232)](_0x36c69b => {
            const _0x1d7a3f = _0x4c5e44;
            _0x36c69b['addEventListener'](_0x1d7a3f(0x3a7), () => {
                const _0x2f7c0f = _0x1d7a3f;
                _0x4c66a1 = _0x36c69b[_0x2f7c0f(0x316)][_0x2f7c0f(0x16a)], _0x2ec078(_0x36c69b), _0x5615c8[_0x2f7c0f(0x283)][_0x2f7c0f(0x389)][_0x2f7c0f(0x3ea)]('hidden'), _0x1014f9();
            });
        }), document[_0x4c5e44(0x416)](_0x4c5e44(0x3a7), _0x3d7a6c => {
            const _0x396a8c = _0x4c5e44;
            !_0x5615c8[_0x396a8c(0x378)][_0x396a8c(0x13a)](_0x3d7a6c[_0x396a8c(0x3ae)]) && _0x5615c8[_0x396a8c(0x283)][_0x396a8c(0x389)][_0x396a8c(0x3ea)]('hidden');
        }), _0x5615c8[_0x4c5e44(0x369)]['addEventListener'](_0x4c5e44(0x3a7), _0x40958c);
    }
    function _0x40958c() {
        const _0x4e5af5 = _0x526209;
        _0x5615c8[_0x4e5af5(0x310)][_0x4e5af5(0x232)](_0x13b68d => {
            const _0x4c500d = _0x4e5af5;
            if (_0x13b68d[_0x4c500d(0x293)] === _0x4c500d(0x2d8))
                _0x13b68d['selectedIndex'] = 0x0;
            else
                _0x13b68d[_0x4c500d(0x2ca)] !== _0x4c500d(0x32f) && (_0x13b68d[_0x4c500d(0x122)] = '');
        }), document[_0x4e5af5(0x3ee)](_0x4e5af5(0x37e))[_0x4e5af5(0x389)][_0x4e5af5(0x3ea)](_0x4e5af5(0x1f3)), [
            _0x4e5af5(0x169),
            _0x4e5af5(0x146),
            _0x4e5af5(0x360),
            _0x4e5af5(0x2be),
            'characterSheetOutputEl',
            'characterScenarioInputEl',
            _0x4e5af5(0x2ff),
            _0x4e5af5(0x35b),
            _0x4e5af5(0x427),
            'outputAlternatif'
        ][_0x4e5af5(0x232)](_0x3344cc => {
            if (_0x5615c8[_0x3344cc])
                _0x5615c8[_0x3344cc]['value'] = '';
        }), _0x243f87([]), _0x3526ae = null, _0x58b497 = null, _0x42471b = null, _0x47d8f9 = null, _0x101ab1 = null, _0x134009 = null, [
            _0x4e5af5(0x414),
            _0x4e5af5(0x422),
            _0x4e5af5(0x296),
            'imageUploadChar',
            _0x4e5af5(0x234)
        ][_0x4e5af5(0x232)](_0x3753e5 => {
            const _0x144b0f = _0x4e5af5;
            if (_0x5615c8[_0x3753e5])
                _0x5615c8[_0x3753e5][_0x144b0f(0x122)] = '';
        }), document[_0x4e5af5(0x3ee)]('instrument-selection-container')[_0x4e5af5(0x389)][_0x4e5af5(0x3ea)](_0x4e5af5(0x1f3)), document['getElementById'](_0x4e5af5(0x15a))[_0x4e5af5(0x389)][_0x4e5af5(0x3ea)]('hidden');
        const _0x50e70f = document[_0x4e5af5(0x338)](_0x4e5af5(0x1a7));
        if (_0x50e70f)
            _0x50e70f[_0x4e5af5(0x25e)] = _0x4e5af5(0x128);
        [
            _0x4e5af5(0x2a3),
            _0x4e5af5(0x1a9),
            _0x4e5af5(0x3f7),
            _0x4e5af5(0x133),
            _0x4e5af5(0x2c0)
        ][_0x4e5af5(0x232)](_0x26c49e => {
            const _0x1be954 = _0x4e5af5;
            if (_0x5615c8[_0x26c49e])
                _0x5615c8[_0x26c49e][_0x1be954(0x389)][_0x1be954(0x3ea)](_0x1be954(0x1f3));
        }), [
            'uploadedImagePreview',
            _0x4e5af5(0x36e),
            _0x4e5af5(0x140),
            _0x4e5af5(0x24b),
            'uploadedVideoPreview'
        ][_0x4e5af5(0x232)](_0x24577b => {
            const _0x5ed201 = _0x4e5af5;
            if (_0x5615c8[_0x24577b])
                _0x5615c8[_0x24577b][_0x5ed201(0x267)] = '';
        });
        if (_0x5615c8[_0x4e5af5(0x36e)][_0x4e5af5(0x1bb)])
            _0x5615c8[_0x4e5af5(0x36e)][_0x4e5af5(0x1bb)]['classList'][_0x4e5af5(0x3ea)](_0x4e5af5(0x1f3));
        if (_0x5615c8['uploadedComposePreview2'][_0x4e5af5(0x1bb)])
            _0x5615c8[_0x4e5af5(0x140)][_0x4e5af5(0x1bb)][_0x4e5af5(0x389)][_0x4e5af5(0x3ea)]('hidden');
        _0x5615c8[_0x4e5af5(0x1c9)][_0x4e5af5(0x25e)] = _0x4e5af5(0x35d), _0x423b0e();
    }
    function _0x278b09() {
        const _0x55da80 = _0x526209, _0x4e0577 = localStorage[_0x55da80(0x3f2)](_0x55da80(0x37a)) || 'dark';
        _0x5f14a7(_0x4e0577);
        const _0x5e666d = _0x5615c8[_0x55da80(0x283)][_0x55da80(0x338)](_0x55da80(0x3c0));
        _0x2ec078(_0x5e666d), _0x101d07(_0x5615c8[_0x55da80(0x3e3)], _0x5615c8[_0x55da80(0x335)]), _0x101d07(_0x5615c8['genreKombinasiSearch'], _0x5615c8['genreKombinasiResults']), _0xa9baa3(), _0x423b0e(), _0x423da5(_0x55da80(0x1e5)), _0x5cd723(_0x55da80(0x177)), _0x1815eb(_0x55da80(0x125), _0x55da80(0x3ff)), _0x5615c8[_0x55da80(0x36e)]['parentElement']['classList']['add'](_0x55da80(0x1f3)), _0x5615c8['uploadedComposePreview2'][_0x55da80(0x1bb)][_0x55da80(0x389)][_0x55da80(0x3ea)](_0x55da80(0x1f3)), _0x287814 && _0x5615c8[_0x55da80(0x14a)]['classList'][_0x55da80(0x3e6)](_0x55da80(0x1f3)), _0x59d2d6();
    }
    _0x278b09();
});
function a0_0x5f18() {
    const _0x40117d = [
        '<p\x20class=\x22text-secondary\x20text-center\x22>Belum\x20ada\x20prompt\x20yang\x20disimpan.</p>',
        'Buatkan\x20gaya\x20musik\x20baru\x20berdasarkan\x20detail\x20ini:\x20',
        'designerTabLagu',
        'Digital\x20Audio\x20Workstation\x20(DAW)',
        'chat-bubble',
        'output-gaya',
        'Opsional:\x20Upload\x20foto\x20produk\x20sebagai\x20referensi',
        '[Gaya,\x20kamera,\x20dan\x20suasana]',
        'drop-zone-char',
        'file',
        'Bongo\x20/\x20Conga\x20/\x20Djembe',
        'detail-gambar',
        'documentElement',
        'PENTING:\x20Jawaban\x20Anda\x20HARUS\x20dalam\x20Bahasa\x20Indonesia.\x20Anda\x20adalah\x20seorang\x20sutradara\x20film\x20dan\x20pakar\x20pemasaran\x20video.\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20Tugas\x20Anda:\x20Analisa\x20gambar\x20yang\x20diberikan.\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20KASUS\x201:\x20JIKA\x20gambar\x20adalah\x20FLYER\x20PROMOSI,\x20POSTER\x20PRODUK,\x20atau\x20IKLAN:\x0a\x20\x20\x20\x20\x20\x20\x20\x20-\x20\x22subject\x22:\x20Nama\x20produk/jasa\x20dan\x20nilai\x20jual\x20utamanya.\x0a\x20\x20\x20\x20\x20\x20\x20\x20-\x20\x22action\x22:\x20Deskripsikan\x20adegan\x20iklan\x20komersial\x20yang\x20dinamis\x20(contoh:\x20\x22reveal\x20produk\x20slow\x20motion\x22,\x20\x22tipografi\x20kinetik\x20yang\x20menampilkan\x20fitur\x22,\x20\x22penggunaan\x20gaya\x20hidup\x22).\x0a\x20\x20\x20\x20\x20\x20\x20\x20-\x20\x22background\x22:\x20Latar\x20studio\x20profesional\x20atau\x20lingkungan\x20yang\x20relevan\x20dengan\x20brand.\x0a\x20\x20\x20\x20\x20\x20\x20\x20-\x20\x22style\x22:\x20Estetika\x20iklan\x20komersial\x20high-end,\x20pencahayaan\x20profesional,\x20tajam\x204k,\x20mood\x20energik\x20atau\x20elegan\x20sesuai\x20produk.\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20KASUS\x202:\x20JIKA\x20gambar\x20adalah\x20PEMANDANGAN\x20atau\x20FOTO\x20BIASA:\x0a\x20\x20\x20\x20\x20\x20\x20\x20-\x20\x22subject\x22:\x20Deskripsi\x20subjek\x20utama\x20(2-5\x20kata).\x0a\x20\x20\x20\x20\x20\x20\x20\x20-\x20\x22action\x22:\x20Deskripsi\x20aksi\x20atau\x20suasana\x20yang\x20tersirat.\x0a\x20\x20\x20\x20\x20\x20\x20\x20-\x20\x22background\x22:\x20Deskripsi\x20latar\x20belakang.\x0a\x20\x20\x20\x20\x20\x20\x20\x20-\x20\x22style\x22:\x20Deskripsi\x20gaya\x20visual,\x20gerakan\x20kamera,\x20dan\x20sinematografi.\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20Balas\x20HANYA\x20dengan\x20format\x20JSON\x20yang\x20ketat.\x20JSON\x20harus\x20memiliki\x20properti:\x20\x22subject\x22,\x20\x22action\x22,\x20\x22background\x22,\x20dan\x20\x22style\x22.',
        'application/json',
        'genreUtamaResults',
        'Jazz\x20Lounge\x20–\x20Suasana\x20malam\x20elegan,\x20bass\x20lembut\x20dan\x20saxophone',
        'character-scenario-input',
        'querySelector',
        '.form-num',
        'gambar_referensi',
        ')\x20untuk\x20',
        'designer-tab-lagu',
        '143SLTmpi',
        '6159516mPrhmU',
        'aspect_ratio',
        'regenJudulButton',
        'flat',
        'Gunakan\x20genre\x20custom:\x20\x22',
        'logo',
        'Bossa\x20Nova\x20(Brasil)\x20–\x20Gabungan\x20samba\x20dan\x20jazz\x20yang\x20lembut',
        '[Gaya\x20Visual\x20Anda]',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22grid\x20grid-cols-1\x20sm:grid-cols-3\x20gap-1\x20py-2\x20border-b\x20border-border-color\x20last:border-0\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22font-semibold\x20text-secondary\x22>',
        'Inuit\x20Throat\x20Singing\x20(Arktik)\x20–\x20Teknik\x20vokal\x20dua\x20nada\x20bersamaan',
        'Pan\x20Flute\x20(Andes)',
        'Cello',
        'Ini\x20akan\x20menimpa\x20semua\x20prompt\x20yang\x20ada.\x20Lanjutkan?',
        'Anda\x20adalah\x20seorang\x20ahli\x20penamaan\x20judul\x20lagu.\x20Tugas\x20Anda\x20adalah\x20membuat\x205\x20alternatif\x20judul\x20lagu\x20yang\x20unik\x20dan\x20menarik.\x20Jawab\x20HANYA\x20dengan\x20format\x20JSON.',
        'ANALISA\x20KARAKTER\x20&\x20ISI\x20FORM',
        'RE-GENERATE',
        'Neo-Soul\x20–\x20Fusion\x20soul,\x20jazz,\x20dan\x20hip-hop\x20(D\x27Angelo,\x20Erykah\x20Badu)',
        'isArray',
        'create',
        'tujuan-gambar-container',
        'Contoh:\x20thumbnail\x20YouTube,\x20post\x20Instagram,\x20brosur',
        'Harp\x20/\x20Kecapi\x20/\x20Guzheng\x20(Cina)',
        'Enter',
        'outputs',
        'sendAssistantMessage',
        'name',
        'GUNAKAN',
        '[Gambar\x20Input]\x20',
        'gayaGambarLabelText',
        'outputLirik',
        'standard-image-form',
        'TAMPILKAN\x20JSON',
        'Invalid\x20API\x20response\x20structure',
        'settingsButton',
        'outputPromptEl',
        'genre-utama-results',
        'push',
        'Tidak\x20ada',
        'standard',
        'dropZoneChar',
        'Bhangra\x20(India\x20/\x20Punjab)\x20–\x20Irama\x20energik\x20dan\x20tarian\x20tradisional',
        'stringify',
        '\x20dengan\x20latar\x20belakang\x20',
        'clearAllButton',
        'character_ref_image.jpg',
        'ANALISA\x20GAMBAR',
        'genre-utama-search',
        'analyze-image-icon',
        'uploadedComposePreview1',
        'Contemporary\x20Pop\x20–\x20Radio-friendly,\x20clean\x20production\x20(Taylor\x20Swift,\x20Ariana\x20Grande)',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20-\x20Lirik\x20Saat\x20Ini:\x20',
        'span',
        'createObjectURL',
        '[Tujuan\x20Pemasaran\x20Anda]',
        '\x22\x20dengan\x20teks\x20\x22',
        'settings-button',
        'import-from-image-btn',
        'transaction',
        'aspectRatioDropdown',
        'pemasaran',
        'theme',
        'href',
        '[Teks\x20Logo\x20Anda]',
        'Gaya\x20musik,\x20maksimal\x20',
        'bahasa-lagu-lainnya',
        'detailGambarLabelText',
        'usePreviewBtn',
        'Electro\x20Dance\x20Rock\x20–\x20Gitar\x20distorsi\x20dan\x20beat\x20digital\x20(Imagine\x20Dragons)',
        'character',
        'lagu-output-section',
        'backToTujuanButtonChar',
        'replace',
        'House\x20Music\x20–\x20Beat\x204/4,\x20tempo\x20120-130\x20BPM\x20(Daft\x20Punk,\x20Frankie\x20Knuckles)',
        'characterCreatorForm',
        '\x0aLatar:\x20',
        'classList',
        'p-2\x20cursor-pointer\x20hover:bg-tertiary',
        '),\x20Vokalis:(',
        'Buat\x20gambar\x20baru\x20dengan\x20menggabungkan\x20elemen\x20dari\x20gambar\x20yang\x20disediakan.\x20',
        'K-Pop\x20Energetic\x20Anthem\x20–\x20Drop\x20catchy,\x20vokal\x20harmonis\x20(BLACKPINK,\x20Stray\x20Kids)',
        '.\x20Gaya\x20seni\x20',
        'div',
        'tujuanGambarEl',
        'preview-modal-body',
        '),\x20Input\x20Tambahan:(',
        'justify-end',
        'active',
        'City\x20Pop\x20Nostalgia\x20–\x20Nuansa\x2080-an\x20Jepang\x20yang\x20tenang\x20dan\x20romantis',
        'Drum\x20&\x20Bass\x20Uplift\x20–\x20Tempo\x20cepat,\x20adrenaline\x20tinggi\x20(Pendulum)',
        'gambar',
        'Buatkan\x20saya\x20konten\x20instrumental\x20dengan\x20detail:\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20-\x20Tema:\x20',
        'export-prompts-button',
        'Synth-Pop\x20–\x20Synth\x2080an,\x20beat\x20modern\x20(The\x20Weeknd,\x20CHVRCHES)',
        'assistant-input',
        'compose2',
        'button',
        'body',
        'Data\x20Berhasil\x20Diambil!',
        'open',
        'lightIcon',
        'text-accent-text',
        'optgroup',
        'select',
        'Deskripsikan\x20Gaya\x20Logo\x20&\x20Font',
        'API\x20Key\x20tidak\x20valid.',
        'click',
        'MEMBUAT\x20GAYA...',
        'Fado\x20(Portugal)\x20–\x20Musik\x20melankolis\x20tentang\x20nasib\x20dan\x20cinta',
        'Deskripsikan\x20Gaya\x20Visual',
        'placeholder1',
        'Sitar\x20(India)',
        'input-lainnya-lagu',
        'target',
        'text-primary',
        'designer-tab-video',
        'input_lainnya',
        'onerror',
        'Ketik\x20sendiri...',
        'split',
        'Oud\x20(Timur\x20Tengah)',
        'yang\x20sesuai',
        'dragleave',
        ',\x20Genre\x20Kombinasi:\x20',
        'Error\x20opening\x20IndexedDB:',
        'focus',
        'placeholder2',
        'querySelectorAll',
        'Contoh:\x20gaya\x20anime\x20fantasi,\x20cat\x20air\x20digital,\x20pixel\x20art',
        'drop-zone',
        'content-riwayat',
        '.aspect-ratio-option',
        'copyButton',
        'OBJECT',
        'produk',
        'Form',
        'Tabla\x20(India)',
        'vokalis',
        'Sempurnakan\x20foto\x20dari\x20\x22',
        'final-prompt-container',
        'Deskripsikan\x20Gaya\x20Fotografi',
        '\x22\x20class=\x22btn\x20btn-secondary\x20!px-3\x20!py-1.5\x20text-xs\x20w-1/3\x20sm:w-auto\x20download-prompt-btn\x22>Unduh</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20data-id=\x22',
        'Maaf,\x20terjadi\x20kesalahan\x20saat\x20menyempurnakan\x20prompt:\x20',
        'assistantInput',
        'regen-gaya-button',
        'uploaded_image.jpg',
        'Indie\x20Pop\x20–\x20Vokal\x20unik,\x20sound\x20eksperimental\x20(Billie\x20Eilish,\x20Lorde)',
        'AI\x20sedang\x20meracik\x20lirik\x20untuk\x20Anda...',
        'PENTING:\x20Jawaban\x20Anda\x20HARUS\x20dalam\x20Bahasa\x20Indonesia.\x20Anda\x20adalah\x20seorang\x20ahli\x20art\x20director.\x20Analisa\x20gambar\x20yang\x20diberikan.\x20Balas\x20HANYA\x20dengan\x20format\x20ini:\x20\x27###\x20Analisis\x20Gambar\x5cn**Subjek\x20Utama:**\x20[Sebutkan\x20subjek\x20utama\x20secara\x20singkat]\x5cn**Deskripsi:**\x20[Jelaskan\x20gambar\x20secara\x20detail\x20dalam\x20satu\x20paragraf]\x27.\x20Jangan\x20tambahkan\x20apapun\x20di\x20luar\x20format\x20ini.',
        '6947516IMbAUP',
        'API\x20Key\x20tidak\x20ditemukan.\x20Mohon\x20isi\x20API\x20Key\x20di\x20pengaturan.',
        'apiKeyModal',
        'Desain\x20kemasan\x20(',
        'latar-belakang-video',
        'closest',
        'Detail\x20Tambahan\x20(Teks,\x20Logo,\x20Material)',
        '[Nama\x20Brand\x20Anda]',
        'scale-95',
        'lingkungan\x20yang\x20imajinatif',
        'Anda\x20tidak\x20bisa\x20menggunakan\x20fitur\x20DESAINER\x20PROMPT\x20dan\x20AHLI\x20PROMPT\x20tanpa\x20API\x20Key.',
        'offsetWidth',
        'back-to-tujuan-button-char',
        'compose1',
        'input',
        'result',
        'aspectRatioContainer',
        'genreUtamaSearch',
        'Sampler\x20/\x20Drum\x20Machine',
        'PENTING:\x20Jawaban\x20Anda\x20HARUS\x20dalam\x20Bahasa\x20Indonesia.\x20Anda\x20adalah\x20seorang\x20direktur\x20kreatif\x20dan\x20ahli\x20rekayasa\x20prompt.\x20Ambil\x20prompt\x20dasar\x20berikut\x20untuk\x20model\x20pembuatan\x20gambar\x20dan\x20buatlah\x20menjadi\x20jauh\x20lebih\x20deskriptif,\x20menggugah,\x20dan\x20profesional.\x20Tambahkan\x20detail\x20spesifik\x20tentang\x20pencahayaan,\x20komposisi,\x20tekstur,\x20dan\x20suasana\x20hati.\x20Pertahankan\x20subjek\x20inti\x20dan\x20rasio\x20aspek\x20yang\x20sama.\x20Balas\x20HANYA\x20dengan\x20teks\x20prompt\x20yang\x20disempurnakan\x20tanpa\x20tambahan\x20atau\x20awalan\x20apapun.',
        'remove',
        'oncomplete',
        'aspect-ratio-dropdown',
        'Chinese\x20Traditional\x20/\x20Guzheng\x20–\x20Musik\x20klasik\x20dengan\x20instrumen\x20dawai\x20lembut',
        'add',
        'lirik',
        'image-upload-char',
        'Contoh:\x20cerah\x20dan\x20menarik,\x20korporat\x20dan\x20profesional',
        'getElementById',
        'min-w-0',
        'readonly',
        'AI\x20sedang\x20menganalisa\x20gambar\x20Anda\x20untuk\x20diubah\x20menjadi\x20ide\x20prompt\x20video...',
        'getItem',
        '<div\x20class=\x22bg-primary-solid\x20border\x20border-border-color\x20rounded-lg\x20p-4\x20mb-4\x22>',
        'Kalimba\x20(Afrika)',
        '30ZJxZEx',
        'Melodica',
        'characterPreviewContainer',
        'subjek-video-subject',
        'SALIN',
        'Dubstep\x20–\x20Bass\x20drop\x20berat,\x20tempo\x20sekitar\x20140\x20BPM\x20(Skrillex,\x20Burial)',
        'timestamp',
        'get',
        'genreKombinasiSearch',
        'Jelaskan\x20Perubahan/Penyempurnaan',
        'assistant',
        'analyze-image-text',
        'onupgradeneeded',
        'enhanceButton',
        'image-designer-form',
        'EDM\x20Festival\x20Pop\x20–\x20Build-up\x20tinggi,\x20drop\x20besar\x20(Zedd,\x20Calvin\x20Harris)',
        'preventDefault',
        'Maaf,\x20terjadi\x20kesalahan\x20saat\x20menganalisa\x20gambar:\x20',
        'detail_komposisi',
        'mimeType',
        'Synthwave\x20Heroic\x20–\x20Retro\x20futuristik\x20dengan\x20semangat\x20juang\x20(The\x20Midnight)',
        'yang\x20menarik',
        'Analisa\x20gambar\x20ini.\x20Jika\x20ini\x20flyer/iklan,\x20buatkan\x20prompt\x20untuk\x20video\x20komersial\x20profesional.\x20Jika\x20bukan,\x20buatkan\x20deskripsi\x20adegan\x20biasa.\x20Berikan\x20output\x20JSON.',
        'Contoh:\x20Ganti\x20latar\x20belakang\x20menjadi\x20pemandangan\x20pantai',
        'Drill\x20–\x20Varian\x20trap\x20yang\x20gelap\x20dan\x20sinematik\x20(Pop\x20Smoke,\x20Central\x20Cee)',
        'analyzeVideoImageButton',
        'prompt_string',
        'Contoh:\x20di\x20atas\x20meja\x20marmer\x20putih\x20dengan\x20properti\x20sarang\x20lebah',
        'theme-toggle',
        'Shoegaze\x20–\x20Dinding\x20suara\x20gitar,\x20vokal\x20tersembunyi\x20(My\x20Bloody\x20Valentine,\x20Slowdive)',
        'upload-label',
        'imageUploadEl',
        'Maaf,\x20terjadi\x20kesalahan:\x20',
        'addEventListener',
        'readAsDataURL',
        'flex',
        'copy-gaya-button',
        'gaya-video',
        'disabled',
        '\x20karakter.',
        'DIMUAT!',
        'character-preview-container',
        'Pop\x20Rock\x20Anthem\x20–\x20Gitar\x20cerah,\x20lirik\x20motivatif\x20(OneRepublic\x20–\x20Counting\x20Stars)',
        'analyzeCharIcon',
        'assistant-chat-body',
        'imageUploadCompose1',
        'Analisa\x20Selesai:\x0aSubjek:\x20',
        'Banjo\x20(Amerika)',
        'mode',
        'gambar\x20ini',
        'outputGaya',
        '.\x20Bergaya\x20',
        'imageUploadChar',
        'drop-zone-compose-2',
        'toISOString',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20-\x20Gaya\x20Saat\x20Ini:\x20',
        'Tarab\x20/\x20Oud\x20Music\x20(Timur\x20Tengah)\x20–\x20Improvisasi\x20Arab\x20klasik',
        'aspect-ratio-container',
        'designerTab',
        'relative\x20flex\x20items-center',
        'Anda\x20adalah\x20seorang\x20penyair.\x20Tugas\x20Anda\x20adalah\x20menulis\x20ulang\x20atau\x20membuat\x20versi\x20baru\x20dari\x20sebuah\x20puisi.\x20Jawab\x20HANYA\x20dengan\x20format\x20JSON.',
        'p-3\x20bg-tertiary\x20rounded-lg\x20flex\x20flex-col\x20sm:flex-row\x20justify-between\x20items-start\x20sm:items-center\x20gap-3\x20hover:bg-border-color\x20transition-colors',
        'latarBelakangVideoEl',
        'value',
        'copyLirikButton',
        'tab-belajar',
        'Halo!\x20Saya\x20Asisten\x20Ahli\x20Prompt.\x20Apa\x20yang\x20bisa\x20saya\x20bantu\x20hari\x20ini?',
        'use-prompt-btn',
        'AI\x20sedang\x20menganalisa\x20gambar\x20Anda,\x20mohon\x20tunggu...',
        'Hasil:\x20Lirik',
        'Trap\x20–\x20Beat\x20berat,\x20hi-hat\x20cepat,\x20sub-bass\x20dalam\x20(Migos,\x20Travis\x20Scott)',
        'Bollywood\x20/\x20Filmi\x20(India)\x20–\x20Lagu\x20film\x20dengan\x20melodi\x20India\x20klasik\x20&\x20pop',
        '1405179jUypMq',
        'toLowerCase',
        '\x20-negative_prompt\x20\x22',
        'getFullYear',
        'Nordic\x20Folk\x20/\x20Viking\x20Music\x20–\x20Drum\x20dan\x20nyanyian\x20kuno\x20Skandinavia',
        'bg-green-500',
        'latar-belakang-gambar',
        '\x20terapkan\x20gaya\x20visual\x20',
        'videoPreviewContainer',
        'copyGayaButton',
        'E-Bow\x20/\x20Effect\x20Pedal',
        'Balkan\x20Brass\x20/\x20Romani\x20(Gipsy)\x20–\x20Musik\x20dansa\x20cepat\x20dan\x20penuh\x20energi',
        'gayaVideoEl',
        'Gaya\x20Visual\x20Baru\x20(jika\x20ingin\x20diubah)',
        'batas-karakter-gaya',
        'contains',
        'Samba\x20(Brasil)\x20–\x20Ritme\x20cepat\x20dengan\x20perkusi\x20khas\x20Carnaval',
        'char-style',
        'DISALIN!',
        'single-upload-container',
        'revokeObjectURL',
        'uploadedComposePreview2',
        'modal-api-key-input',
        '</pre>',
        '<span\x20id=\x22enhance-prompt-text\x22>SEMPURNAKAN\x20PROMPT</span>',
        'karakter',
        'message',
        'videoImageAnalysisResult',
        'text-white',
        'toggle',
        '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22text-xs\x20text-secondary\x20capitalize\x22>Tipe:\x20',
        'assistantButton',
        'removeCharImageButton',
        '<span\x20class=\x22loader\x22></span>',
        'uploadedImagePreview',
        'Bagpipe\x20(Skotlandia)',
        'French\x20Horn',
        'Mohon\x20upload\x20gambar\x20referensi\x20karakter\x20terlebih\x20dahulu.',
        'light',
        'Contoh:\x20teks\x20\x27Diskon\x2050%\x27,\x20logo\x20di\x20pojok\x20kanan\x20atas',
        'output-alternatif',
        'Opsional:\x20Upload\x20sketsa\x20atau\x20gambar\x20referensi',
        'judul',
        '[Subjek]',
        'dropZoneCompose1',
        'removeImageButton',
        'Pilih\x20alat\x20musik...',
        'alat-musik-lainnya',
        'dropZoneCompose2',
        '<p\x20class=\x22italic\x20text-secondary\x22>Tidak\x20ada\x20data\x20input\x20tersimpan.</p>',
        'Native\x20American\x20Chant\x20–\x20Vokal\x20ritual\x20dan\x20drum\x20spiritual',
        'Contoh:\x20playful\x20dan\x20berwarna,\x20mewah\x20dengan\x20nuansa\x20emas',
        'delete-prompt-btn',
        'Bossa\x20Nova\x20Romance\x20–\x20Lembut\x20dan\x20elegan\x20(João\x20Gilberto,\x20Astrud\x20Gilberto)',
        '5451072dteqKm',
        'drop',
        'Trance\x20–\x20Melodi\x20synth\x20yang\x20membangun,\x20euforia\x20(Armin\x20van\x20Buuren,\x20Paul\x20van\x20Dyk)',
        'Analisa\x20karakter\x20dalam\x20gambar\x20ini\x20dan\x20berikan\x20hasilnya\x20dalam\x20format\x20JSON\x20sesuai\x20instruksi.',
        'uploaded_image_2.jpg',
        'theme-icon-dark',
        'Anda\x20adalah\x20seorang\x20pencipta\x20lagu\x20ahli\x20dan\x20produser\x20musik.\x20Tugas\x20Anda\x20adalah\x20membuat\x20konten\x20untuk\x20prompt\x20lagu\x20di\x20AI\x20SUNO.\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Instruksi\x20PENTING:\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x201.\x20Hasilkan\x20LIRIK,\x20GAYA\x20(Styles),\x20dan\x205\x20JUDUL\x20LAGU.\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x202.\x20LIRIK\x20harus\x20memiliki\x20format\x20terstruktur\x20dengan\x20label\x20seperti\x20[Verse],\x20[Chorus],\x20dll.\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x203.\x20**Sangat\x20Penting:\x20Di\x20dalam\x20JSON,\x20setiap\x20baris\x20lirik\x20HARUS\x20diakhiri\x20dengan\x20karakter\x20newline\x20escape\x20(\x5cn)\x20untuk\x20jeda\x20baris.**\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x204.\x20GAYA\x20(Styles)\x20harus\x20berupa\x20daftar\x20kata\x20kunci\x20deskriptif,\x20TANPA\x20menyebutkan\x20nama\x20artis.\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x205.\x20Jawab\x20HANYA\x20dalam\x20format\x20JSON.',
        'Respons\x20JSON\x20tidak\x20valid.',
        'imageAnalysisResult',
        'ratio',
        'Contoh:\x20minimalis\x20line-art,\x20font\x20sans-serif\x20modern',
        'subject',
        'standardImageForm',
        'Contoh:\x20seorang\x20ksatria\x20naga\x20di\x20puncak\x20gunung',
        'Anda\x20adalah\x20seorang\x20penyair\x20dan\x20komposer\x20musik.\x20Tugas\x20Anda\x20adalah\x20membuat\x20PUISI\x20dan\x20GAYA\x20MUSIK\x20instrumental.\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Instruksi\x20PENTING:\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x201.\x20Hasilkan\x20PUISI\x20(bukan\x20lirik\x20lagu),\x20GAYA\x20(Styles),\x20dan\x205\x20JUDUL.\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x202.\x20PUISI\x20harus\x20puitis\x20dan\x20sesuai\x20dengan\x20tema.\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x203.\x20GAYA\x20(Styles)\x20harus\x20mendeskripsikan\x20musik\x20instrumental,\x20fokus\x20pada\x20alat\x20musik\x20utama\x20yang\x20dipilih.\x20JANGAN\x20menyebut\x20nama\x20artis.\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x204.\x20Jawab\x20HANYA\x20dalam\x20format\x20JSON.',
        'dropZone',
        'analyze-char-text',
        'regenLirikButton',
        'tema',
        'Deskripsikan\x20Gaya\x20Artistik',
        'Electro\x20Swing\x20–\x20Campuran\x20jazz\x20klasik\x20dan\x20beat\x20modern\x20(Parov\x20Stelar)',
        'readwrite',
        'belajar',
        'Bubblegum\x20Pop\x20–\x20Manis,\x20ringan,\x20warna-warni\x20(Charli\x20XCX,\x20early\x20Britney\x20Spears)',
        'Shaker,\x20Tamborin,\x20Maracas',
        'profesional',
        'includes',
        'Tidak\x20diisi',
        'characterSheetOutputEl',
        'Keyboard\x20Digital\x20/\x20MIDI\x20Controller',
        'Indie\x20Rock\x20/\x20Alternative\x20–\x20Sound\x20non-mainstream,\x20mandiri\x20(Arctic\x20Monkeys,\x20The\x20Strokes)',
        '\x20baru\x20berdasarkan\x20detail\x20ini:\x20',
        '\x22\x20ini...',
        'filter',
        '[PROMPT\x20ALTERNATIF]\x0a',
        'toLocaleString',
        'R&B\x20Slow\x20Jam\x20–\x20Vokal\x20lembut\x20dan\x20sensual\x20(SZA,\x20Usher)',
        'border-red-500',
        'analyze-video-image-text',
        'GAGAL',
        'Alternative\x20R&B\x20–\x20Melodi\x20eksperimental,\x20produksi\x20minimalis\x20(Joji,\x20FKA\x20twigs)',
        'Trumpet',
        'promptHistoryList',
        'kemasan-container',
        'Power\x20Metal\x20/\x20Symphonic\x20Rock\x20–\x20Cepat\x20dan\x20penuh\x20semangat\x20(Nightwish)',
        'Buatkan\x20',
        'charAttireEl',
        'json-output-prompt',
        'Garage\x20Rock\x20–\x20Sound\x20mentah,\x20distorsi,\x20energi\x20tinggi\x20(The\x20White\x20Stripes,\x20Ty\x20Segall)',
        'download',
        'Sebuah\x20foto\x20produk\x20profesional\x20dari\x20',
        'change',
        'copy-alternatif-button',
        'map',
        'savePromptButton',
        'Tibetan\x20Chant\x20/\x20Mantra\x20Music\x20–\x20Spiritual,\x20meditasi,\x20dan\x20vibrasi\x20rendah',
        'removeCompose2',
        'Gagal:\x20',
        'Andean\x20Folk\x20(Peru\x20/\x20Bolivia)\x20–\x20Seruling\x20pan\x20dan\x20gitar\x20charango',
        'PENTING:\x20Jawaban\x20Anda\x20HARUS\x20dalam\x20Bahasa\x20Indonesia.\x20Anda\x20adalah\x20ahli\x20rekayasa\x20prompt\x20untuk\x20image\x20composition.\x20Ubah\x20instruksi\x20dasar\x20pengguna\x20menjadi\x20prompt\x20yang\x20detail\x20dan\x20profesional.\x20Fokus\x20pada\x20cara\x20mengintegrasikan\x20elemen\x20dari\x20foto\x201\x20ke\x20foto\x202\x20secara\x20mulus\x20(pencahayaan,\x20bayangan,\x20skala).\x20Balas\x20HANYA\x20dengan\x20teks\x20prompt\x20yang\x20disempurnakan\x20tanpa\x20tambahan\x20atau\x20awalan\x20apapun.',
        'objectStoreNames',
        '39659hNWWgP',
        'STRING',
        '<span>BUAT\x20PROMPT\x20LAGU</span>',
        'MEMBUAT\x20PUISI...',
        'Apa\x20Objek\x20Utama\x20pada\x20Gambar?',
        'regenGayaButton',
        'audioUpload',
        'mainTabButtons',
        'json',
        'label[for=\x22output-lirik\x22]',
        'Desain\x20logo\x20untuk\x20brand\x20bernama\x20\x22',
        'compositionPreviewContainer',
        'gambar_referensi_2_base64',
        '\x20prompt\x20berhasil\x20diimpor!',
        'Kontrabas\x20/\x20Double\x20Bass',
        'Soul\x20Ballad\x20–\x20Vokal\x20emosional,\x20tempo\x20lambat\x20(Adele\x20–\x20Someone\x20Like\x20You)',
        'Synthesizer\x20Analog/Digital',
        'Darbuka\x20(Timur\x20Tengah)',
        '[Skenario/Aksi]',
        'Maaf,\x20terjadi\x20kesalahan\x20saat\x20menganalisa\x20karakter:\x20',
        'gambar_referensi_1_base64',
        'previewModalBody',
        'sederhana',
        '[Produk\x20Anda]',
        'label',
        'genre',
        'char-name',
        '[Aksi]',
        'uploaded-image-preview',
        'parentElement',
        'darkIcon',
        'analyze-video-image-icon',
        'African\x20Tribal\x20/\x20Highlife\x20/\x20Soukous\x20–\x20Beat\x20ritmik\x20dan\x20vokal\x20berulang',
        'max-w-[85%]',
        'onsuccess',
        '<span\x20id=\x22analyze-video-image-text\x22>ANALISA\x20GAMBAR\x20&\x20ISI\x20FORM</span>',
        'Gitar\x20Akustik\x20/\x20Elektrik',
        'Contoh:\x20pencahayaan\x20studio\x20yang\x20bersih,\x20minimalis',
        'remove-char-image-button',
        'ARRAY',
        'designerTabImage',
        'buatPromptLaguButton',
        'copy-button',
        'showJsonButton',
        'Anda\x20adalah\x20penulis\x20lirik\x20ahli.\x20Tugas\x20Anda\x20adalah\x20menulis\x20ulang\x20atau\x20membuat\x20versi\x20baru\x20dari\x20sebuah\x20lirik.\x20Hasilkan\x20lirik\x20terstruktur.\x20Jawab\x20HANYA\x20dengan\x20format\x20JSON.',
        'custom',
        'reverse',
        'appendChild',
        'style',
        'fields',
        'character-creator-form',
        'File\x20tidak\x20valid\x20atau\x20rusak.',
        'Saxophone',
        'save-lagu-prompt-button',
        'parse',
        '),\x20Bahasa:(',
        'charStyleEl',
        'Gagal\x20memuat\x20prompt.\x20Mungkin\x20sudah\x20dihapus.',
        'lagu-designer-form',
        'packaging',
        'Balalaika\x20Folk\x20(Rusia)\x20–\x20Melodi\x20cepat\x20dengan\x20instrumen\x20petik\x20khas',
        'charPhysicEl',
        'drop-zone-compose-1',
        'alat-musik-utama',
        'justify-start',
        'instrument-selection-container',
        'output-prompt',
        '.dps',
        'copy',
        'PromptStudioDB',
        'analyzeCharButton',
        'image',
        'kemasanContainerEl',
        'dragover',
        'subjekVideoActionEl',
        'scale-100',
        'aspect-ratio-button',
        'Marching\x20Anthem\x20/\x20Stadium\x20Pop\x20–\x20Chant\x20dan\x20chorus\x20besar\x20(Coldplay\x20–\x20Viva\x20La\x20Vida)',
        'form-input\x20w-full\x20p-2\x20pr-12',
        'Stoner\x20/\x20Doom\x20Metal\x20–\x20Tempo\x20lambat,\x20riff\x20berat,\x20sound\x20‘tebal’\x20(Sleep,\x20Electric\x20Wizard)',
        'action',
        'Hardstyle\x20–\x20Kickdrum\x20keras,\x20melodi\x20euforik\x20(Headhunterz,\x20Showtek)',
        ',\x20Alat\x20Musik\x20Utama:\x20',
        'Mohon\x20upload\x20gambar\x20referensi\x20untuk\x20video\x20terlebih\x20dahulu.',
        'Harap\x20lengkapi\x20detail\x20pada\x20form\x20terlebih\x20dahulu.',
        'hidden',
        '<div\x20class=\x22mb-4\x20p-3\x20bg-tertiary\x20rounded-lg\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h4\x20class=\x22font-bold\x20text-primary\x20text-lg\x20mb-1\x22>',
        'tab-riwayat',
        'composition-preview-container',
        'audioVideoEl',
        'copy-json-button',
        'preview-prompt-btn',
        'AI\x20sedang\x20meracik\x20',
        ',\x20Input\x20Tambahan:\x20',
        'Mongolian\x20Throat\x20Singing\x20(Khoomei)\x20–\x20Vokal\x20resonan\x20ganda\x20khas\x20Asia\x20Tengah',
        'drop-zone-video',
        'onload',
        'gaya',
        'contentSections',
        'clear-all-button',
        'SEMBUNYIKAN\x20JSON',
        '</div>',
        'tema-lagu',
        'status',
        'dark',
        ',\x20Genre\x20Utama:\x20',
        'getAll',
        'AI\x20sedang\x20meracik\x20gaya\x20musik\x20untuk\x20Anda...',
        'audio/',
        '</h4>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22text-xs\x20text-secondary\x22>Disimpan:\x20',
        'Anda\x20adalah\x20produser\x20musik\x20ahli.\x20Tugas\x20Anda\x20adalah\x20membuat\x20deskripsi\x20gaya\x20musik\x20(Styles)\x20dalam\x20bentuk\x20kata\x20kunci.\x20Patuhi\x20batas\x20karakter\x20yang\x20diminta\x20dan\x20JANGAN\x20menyebut\x20nama\x20artis.\x20Jawab\x20HANYA\x20dengan\x20format\x20JSON.',
        'analyze-video-image-button',
        'removeChild',
        'candidates',
        'back-to-tujuan-button',
        'match',
        'join',
        'Opsional:\x20Upload\x20sketsa\x20atau\x20referensi\x20logo',
        'close-preview-btn-secondary',
        'prompt_alternatif',
        'padStart',
        'Error\x20calling\x20Gemini\x20Vision\x20API\x20for\x20character\x20analysis:',
        'Aspek\x20Rasio',
        '200BeKscA',
        'vokalis-lagu',
        'lainnya',
        'analyzeImageIcon',
        'desainer',
        'aspectRatioOptions',
        'onclick',
        '\x20baru...',
        'Trot\x20(Korea)\x20–\x20Musik\x20rakyat\x20Korea\x20tempo\x20cepat\x20dengan\x20vokal\x20vibrato',
        'Gaya\x20musik\x20instrumental,\x20maksimal\x20',
        '\x20Ciri\x20fisik:\x20',
        'remove-image-button',
        'files',
        'send-assistant-message',
        'Lo-Fi\x20Chillhop\x20–\x20Beat\x20santai,\x20tekstur\x20analog,\x20nuansa\x20nostalgia',
        'jenisKemasanEl',
        'Clarinet',
        'bahasa-lagu',
        'Buatkan\x20lirik\x20lagu\x20dan\x20prompt\x20Styles\x20(prompt\x20styles\x20max\x201000\x20karakter,\x20tanpa\x20nama\x20artis\x20tanpa\x20nama\x20grup\x20band)\x20untuk\x20Suno\x20Ai,\x20dengan\x20detail\x20sebagai\x20berikut,\x20Tema:(',
        '<span\x20class=\x22loader\x22></span>\x20MEMBUAT\x20LAGU...',
        'image-upload',
        'Shamisen\x20(Jepang)',
        '[JUDUL]\x0a',
        '[Gaya\x20Artistik\x20Anda]',
        '\x20Detail\x20audio:\x20',
        'forEach',
        'PENTING:\x20Jawaban\x20Anda\x20HARUS\x20dalam\x20Bahasa\x20Indonesia.\x20Anda\x20adalah\x20seorang\x20pakar\x20musik\x20dan\x20transkriber\x20audio\x20profesional.\x0a\x20\x20\x20\x20\x20\x20\x20\x20Tugas\x20Anda:\x0a\x20\x20\x20\x20\x20\x20\x20\x201.\x20Transkripsikan\x20lirik\x20lagu\x20dari\x20file\x20audio\x20yang\x20diberikan\x20dengan\x20sangat\x20akurat.\x20Jika\x20audio\x20adalah\x20instrumental,\x20tulis\x20\x22[Instrumental]\x22.\x0a\x20\x20\x20\x20\x20\x20\x20\x202.\x20Analisa\x20genre\x20musik\x20utama\x20dari\x20lagu\x20tersebut.\x0a\x20\x20\x20\x20\x20\x20\x20\x203.\x20Tentukan\x20tema\x20atau\x20suasana\x20utama\x20dari\x20lagu\x20tersebut\x20dalam\x20beberapa\x20kata.\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20INSTRUKSI\x20FORMAT\x20LIRIK\x20(SANGAT\x20PENTING):\x0a\x20\x20\x20\x20\x20\x20\x20\x20-\x20Pisahkan\x20setiap\x20baris\x20lirik\x20dengan\x20karakter\x20newline\x20(\x5cn).\x0a\x20\x20\x20\x20\x20\x20\x20\x20-\x20Pisahkan\x20setiap\x20bait\x20(stanza)\x20dengan\x20DUA\x20karakter\x20newline\x20(\x5cn\x5cn).\x0a\x20\x20\x20\x20\x20\x20\x20\x20-\x20Sertakan\x20label\x20bagian\x20lagu\x20dalam\x20kurung\x20siku\x20seperti\x20[Verse\x201],\x20[Chorus],\x20[Bridge],\x20[Outro]\x20di\x20baris\x20tersendiri.\x0a\x20\x20\x20\x20\x20\x20\x20\x20-\x20Jangan\x20menulis\x20lirik\x20sebagai\x20satu\x20paragraf\x20panjang.\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20Jawab\x20HANYA\x20dalam\x20format\x20JSON\x20berikut:\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22lirik\x22:\x20\x22Teks\x20lirik\x20lengkap\x20dengan\x20format\x20baris\x20dan\x20bait...\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22genre\x22:\x20\x22Genre\x20musik\x20(contoh:\x20Pop,\x20Rock,\x20Jazz)\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22tema\x22:\x20\x22Tema\x20lagu\x20(contoh:\x20Kesedihan,\x20Semangat\x20Pagi)\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20}',
        'imageUploadVideoEl',
        'gayaGambarEl',
        'puisi',
        'user',
        'designerTabVideo',
        'Techno\x20–\x20Sound\x20repetitif,\x20futuristik,\x20fokus\x20pada\x20ritme\x20(Kraftwerk,\x20Richie\x20Hawtin)',
        'image-preview-container',
        '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22text-xs\x20text-secondary\x22>Disimpan\x20pada:\x20',
        'deleteApiKeyBtn',
        '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>',
        '[GAYA]\x0a',
        'Mariachi\x20(Meksiko)\x20–\x20Trompet,\x20biola,\x20dan\x20gitar\x20khas\x20perayaan',
        'negatifVideoEl',
        'video-image-analysis-result',
        'dataTransfer',
        'Opsional:\x20Upload\x20gambar\x20aset\x20sebagai\x20referensi',
        '.mt-5',
        'char-attire',
        'content-desainer',
        'close-preview-modal',
        'copyJsonButton',
        'gambar_referensi_base64',
        'errorCode',
        'uploadedCharPreview',
        'getDate',
        'lagu',
        'Alternatif\x20Judul\x20',
        'judulLaguList',
        'importFromImageBtn',
        'detailGambarEl',
        '4630210RglbRJ',
        'Contoh:\x20ubah\x20menjadi\x20gaya\x20sinematik,\x20buat\x20lebih\x20cerah',
        'innerHTML',
        'Biola\x20(Violin)',
        'Contoh:\x20sebuah\x20mobil\x20merah,\x20potret\x20seorang\x20wanita',
        'Deskripsikan\x20Produk\x20di\x20Dalam\x20Kemasan',
        'Flute\x20(Seruling)',
        'trim',
        'MENGANALISA...',
        'close-api-key-modal',
        'regen-lirik-button',
        'saveApiKeyBtn',
        'textContent',
        '<span\x20class=\x22loader\x22></span>\x20MENINGKATKAN...',
        'Timpani\x20/\x20Snare\x20/\x20Bass\x20Drum\x20Orkestra',
        'clear',
        'imageCompositionForm',
        'assistant-button',
        'getAttribute',
        '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22text-[10px]\x20px-1.5\x20py-0.5\x20rounded-full\x20border\x20border-secondary\x20text-secondary\x20uppercase\x22>',
        'opacity-0',
        'src',
        'execCommand',
        'dropZoneVideo',
        'upload',
        'typing-bubble',
        'modalApiKeyInput',
        'Kendang\x20(Indonesia)',
        'Opsional:\x20Upload\x20gambar\x20referensi\x20untuk\x20kemasan',
        '\x20Gaya\x20visual:\x20',
        'prompt-history-list',
        'Menganalisa...',
        'aspectRatioButton',
        'image-composition-form',
        'Contoh:\x20sebotol\x20madu\x20dalam\x20jar\x20kaca\x20dengan\x20tutup\x20kayu',
        'background',
        'Mohon\x20masukkan\x20Tema\x20Lagu\x20terlebih\x20dahulu.',
        'slice',
        'Tidak\x20ada\x20data\x20untuk\x20disimpan.',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22flex\x20gap-2\x20w-full\x20sm:w-auto\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20data-id=\x22',
        '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        'Sebuah\x20ilustrasi\x20dari\x20',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20-\x20Tema:\x20',
        'Gagal\x20membuat\x20judul.',
        'character-output-section',
        'uploadLabel',
        'Qawwali\x20(Pakistan\x20/\x20India)\x20–\x20Musik\x20spiritual\x20Sufi\x20penuh\x20improvisasi',
        'data',
        'className',
        'aspectRatioMenu',
        'use-preview-btn',
        '.\x20Aspek\x20rasio\x20',
        'single',
        'audio-upload',
        'latarBelakangGambarEl',
        '\x20berlatar\x20di\x20',
        'composition-details',
        'MEMBUAT\x20LIRIK...',
        'Maaf,\x20saya\x20sedang\x20mengalami\x20gangguan...\x20',
        'Cajón',
        'Lirik\x20lagu\x20terstruktur.',
        'removeItem',
        'charAt',
        'data:image/jpeg;base64,',
        '\x22\x20class=\x22btn\x20btn-primary\x20!px-3\x20!py-1.5\x20text-xs\x20w-1/3\x20sm:w-auto\x20use-prompt-btn\x22>Gunakan</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20data-id=\x22',
        'tagName',
        'negatif-video',
        'Indie\x20Chillwave\x20–\x20Lembut,\x20synth\x20retro,\x20vibe\x20sore\x20hari\x20(Washed\x20Out)',
        'imageUploadCompose2',
        'genre-kombinasi-search',
        'Indonesia',
        '\x22\x20class=\x22btn\x20btn-secondary\x20!px-3\x20!py-1.5\x20text-xs\x20w-1/4\x20sm:w-auto\x20preview-prompt-btn\x22\x20title=\x22Lihat\x20Detail\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20class=\x22h-4\x20w-4\x22\x20fill=\x22none\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20stroke=\x22currentColor\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22\x20stroke-width=\x222\x22\x20d=\x22M15\x2012a3\x203\x200\x2011-6\x200\x203\x203\x200\x20016\x200z\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22\x20stroke-width=\x222\x22\x20d=\x22M2.458\x2012C3.732\x207.943\x207.523\x205\x2012\x205c4.478\x200\x208.268\x202.943\x209.542\x207-1.274\x204.057-5.064\x207-9.542\x207-4.477\x200-8.268-2.943-9.542-7z\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20data-id=\x22',
        '[Subjek\x20Ilustrasi\x20Anda]',
        'video-preview-container',
        'filename',
        'Struktur\x20respons\x20API\x20tidak\x20valid.',
        'PENTING:\x20Jawaban\x20Anda\x20HARUS\x20dalam\x20Bahasa\x20Indonesia.\x20Anda\x20adalah\x20seorang\x20ahli\x20rekayasa\x20prompt\x20(prompt\x20engineering)\x20dengan\x20pengalaman\x20puluhan\x20tahun.\x20Pengetahuan\x20Anda\x20telah\x20diperbarui\x20dengan\x20dokumentasi\x20resmi\x20terbaru.\x20Spesialisasi\x20Anda\x20adalah\x20pada\x20model-model\x20Google\x20berikut:\x0a\x0a1.\x20\x20**Model\x20Gambar\x20(dikenal\x20sebagai\x20Nano\x20Banana\x20atau\x20gemini-2.5-flash-image-preview):**\x20Anda\x20tahu\x20bahwa\x20model\x20ini\x20sangat\x20kuat\x20dalam\x20pemahaman\x20bahasa\x20alami\x20dan\x20bekerja\x20paling\x20baik\x20dengan\x20deskripsi\x20naratif,\x20bukan\x20hanya\x20kata\x20kunci.\x20Anda\x20paham\x20kemampuannya\x20meliputi:\x20Text-to-Image,\x20Image+Text-to-Image\x20(editing\x20seperti\x20menambah/menghapus\x20elemen),\x20Multi-Image\x20to\x20Image\x20(komposisi\x20&\x20transfer\x20gaya),\x20dan\x20rendering\x20teks\x20yang\x20akurat\x20untuk\x20logo/poster.\x20Anda\x20juga\x20tahu\x20semua\x20gambar\x20yang\x20dihasilkan\x20memiliki\x20watermark\x20SynthID.\x0a\x0a2.\x20\x20**Model\x20Video\x20(Veo3):**\x20Anda\x20tahu\x20model\x20ini\x20menghasilkan\x20video\x20high-fidelity\x20hingga\x201080p\x20dengan\x20durasi\x208\x20detik,\x20lengkap\x20dengan\x20audio\x20yang\x20dihasilkan\x20secara\x20alami\x20(dialog,\x20SFX,\x20ambient).\x20Anda\x20paham\x20cara\x20mem-prompt-nya\x20dengan\x20subjek,\x20aksi,\x20gaya,\x20kontrol\x20kamera,\x20dan\x20juga\x20prompt\x20negatif.\x20Anda\x20tahu\x20Veo3\x20bisa\x20di-inisiasi\x20dengan\x20sebuah\x20gambar\x20(Image-to-Video).\x0a\x0aKetika\x20menjawab\x20pertanyaan\x20pengguna,\x20berikan\x20jawaban\x20yang\x20praktis,\x20mendalam,\x20dan\x20profesional\x20berdasarkan\x20pengetahuan\x20ini.',
        'Instrumental',
        'Afrobeat\x20Celebration\x20–\x20Irama\x20funky\x20dan\x20vokal\x20berulang\x20positif\x20(Burna\x20Boy)',
        'Gnawa\x20(Maroko)\x20–\x20Musik\x20spiritual\x20dengan\x20guembri\x20dan\x20tepukan\x20tangan',
        'edit',
        'imagePreviewContainer',
        'bg-accent-color',
        'Psychedelic\x20Rock\x20–\x20Efek\x20studio,\x20sound\x20trippy\x20(Tame\x20Impala,\x20Pink\x20Floyd)',
        'Dream\x20Pop\x20–\x20Suara\x20lembut,\x20ambient,\x20dan\x20efek\x20reverb\x20(The\x201975,\x20Beach\x20House)',
        'toString',
        'form_type',
        'copyAlternatifButton',
        'ilustrasi',
        'geminiApiKey',
        'image/',
        'subjekVideoSubjectEl',
        'Hasil:\x20Puisi',
        'attire',
        'finalPromptContainer',
        'Error:\x20API\x20Key\x20pengguna\x20tidak\x20valid...',
        'Dangdut\x20(Indonesia)\x20–\x20Campuran\x20Melayu,\x20India,\x20dan\x20Arab\x20dengan\x20gendang\x20khas',
        'createElement',
        'closeAssistantModal',
        'scrollTop',
        'Error\x20parsing\x20imported\x20file:',
        'Gagal\x20membuat\x20gaya.',
        'startsWith',
        'assistant-modal',
        'getMonth',
        'Post-Punk\x20–\x20Eksperimental,\x20introspektif,\x20bass\x20menonjol\x20(The\x20Cure,\x20Joy\x20Division)',
        'Buatkan\x205\x20judul\x20lagu\x20baru\x20berdasarkan\x20detail\x20ini:\x20',
        'analyzeImageText',
        'jsonOutputPrompt',
        'jenis-kemasan',
        'jsonOutputContainer',
        'genre_kombinasi',
        'keys',
        'jenis_kemasan',
        'analyzeCharText',
        'objectStore',
        'Keroncong\x20(Indonesia)\x20–\x20Gaya\x20klasik\x20dengan\x20gitar\x20ukulele\x20dan\x20cello',
        'Bass\x20Guitar',
        'image/jpeg',
        'Apakah\x20Anda\x20yakin\x20ingin\x20menghapus\x20API\x20Key\x20ini?',
        'type',
        'Drum\x20Set',
        'Deskripsikan\x20Gaya\x20Desain\x20Kemasan',
        'key',
        'setItem',
        'gabungkan',
        'parts',
        'J-Pop\x20Idol\x20Vibe\x20–\x20Ceria,\x20synth\x20penuh\x20warna,\x20cepat\x20(Perfume,\x20YOASOBI)',
        'inputs',
        '427994QaSKoY',
        '&gt;',
        'uploadedVideoPreview',
        'Uplifting\x20Pop\x20–\x20Cerah,\x20penuh\x20semangat,\x20chorus\x20catchy\x20(Katy\x20Perry\x20–\x20Firework)',
        'Aset\x20pemasaran\x20visual\x20untuk\x20',
        'SELECT',
        '[Nama\x20Karakter]',
        'bg-tertiary',
        'content',
        'prompt_negatif',
        'removeAttribute',
        'Workout\x20Trap\x20/\x20Hype\x20Rap\x20–\x20Bass\x20berat\x20dan\x20motivasi\x20keras\x20(Drake,\x20Travis\x20Scott)',
        'values',
        'Ambient\x20–\x20Tanpa\x20beat,\x20fokus\x20pada\x20tekstur\x20dan\x20atmosfer\x20(Brian\x20Eno,\x20Aphex\x20Twin)',
        'Struktur\x20respons\x20tidak\x20valid.',
        'preview-modal',
        'characterOutputSection',
        'assistantModal',
        'scrollHeight',
        'char-physic',
        ':scope\x20>\x20label',
        'analyze-char-button',
        'physic',
        '🎧\x20AI\x20sedang\x20mendengarkan\x20lagu\x20dan\x20mengekstrak\x20lirik...',
        'analyzeImageButton',
        ',\x20Bahasa:\x20',
        'Analisa\x20gambar\x20ini\x20sesuai\x20format\x20yang\x20diperintahkan.',
        'prompts',
        'assistantChatBody',
        'riwayat',
        '27KjeDzL',
        'getHours',
        'charNameEl',
        'produkGambarEl',
        'tab-desainer',
        '<p\x20class=\x22text-red-500\x20text-center\x22>Gagal\x20memuat\x20riwayat.</p>',
        'download-prompt-btn',
        'previewModal',
        'Synthesizer',
        'HTTP\x20error!\x20status:\x20',
        'Vaporwave\x20–\x20Estetika\x20retro\x2080/90an,\x20melambat\x20(Macintosh\x20Plus,\x20Blank\x20Banshee)',
        '5heQLnv',
        'analyze-image-button',
        'api-key-modal',
        'compositionDetailsEl',
        'json-output-container',
        'Buatkan\x20saya\x20konten\x20lagu\x20lengkap\x20dengan\x20detail:\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20-\x20Tema:\x20',
        'Maaf,\x20terjadi\x20kesalahan\x20saat\x20menganalisa\x20gambar.\x20',
        'content-belajar',
        'characterScenarioInputEl',
        'Piano',
        'video',
        'subjek-video-action',
        'PENTING:\x20Jawaban\x20Anda\x20HARUS\x20dalam\x20Bahasa\x20Indonesia.\x20Anda\x20adalah\x20seorang\x20sutradara\x20film\x20dan\x20ahli\x20rekayasa\x20prompt\x20video.\x20Ambil\x20prompt\x20dasar\x20berikut\x20dan\x20buatlah\x20menjadi\x20jauh\x20lebih\x20deskriptif,\x20sinematik,\x20dan\x20profesional.\x20Tambahkan\x20detail\x20spesifik\x20tentang\x20gerakan\x20kamera,\x20sinematografi,\x20pencahayaan,\x20tempo,\x20dan\x20desain\x20suara.\x20Pertahankan\x20subjek\x20inti\x20dan\x20rasio\x20aspek.\x20Balas\x20HANYA\x20dengan\x20teks\x20prompt\x20yang\x20disempurnakan\x20tanpa\x20tambahan\x20atau\x20awalan\x20apapun.',
        'detail-gambar-label-text',
        '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22sm:col-span-2\x20text-primary\x20preserve-whitespace\x22>',
        'uploaded-compose-preview-2',
        'theme-icon-light',
        'judul_lagu',
        'delete',
        'returnTab',
        'allFormInputs',
        'bahasa',
        'Viola',
        'importPromptsInput',
        'Apa\x20Tujuan\x20Aset\x20Pemasaran?',
        'length',
        'dataset',
        'createObjectStore',
        'error',
        'Heavy\x20Metal\x20–\x20Distorsi\x20gitar\x20agresif,\x20solo\x20cepat\x20(Iron\x20Maiden,\x20Metallica)',
        'Wajib:\x20Upload\x20foto\x20yang\x20ingin\x20diedit',
        'outputAlternatif',
        ',\x20Vokalis:\x20',
        'placeholder',
        'data-id',
        'translate-y-4',
        'AI\x20sedang\x20meracik\x20gaya\x20musik\x20baru...',
        '\x20Aspek\x20rasio\x20',
        'character-sheet-output',
        'keypress',
        'remove-video-button',
        'image-upload-compose-1'
    ];
    a0_0x5f18 = function () {
        return _0x40117d;
    };
    return a0_0x5f18();
}