import application from "CssFolder/application.scss";
import $ from 'jquery';
import { sayHello } from './greeting.js';
import 'bootstrap';
import 'jquery-ui';
import 'jquery-ui/ui/widgets/datepicker';
import Quill from 'quill';
var quill = new Quill('#editor', {
    theme: 'snow'
})

// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// ClassicEditor
//     .create(document.querySelector('#ckeditor'))
//     .then(editor => {
//         console.log(editor);
//     })
//     .catch(error => {
//         console.error(error);
//     });

if (document.getElementById('ckeditor')) {
    import('@ckeditor/ckeditor5-build-classic').then(function (ClassicEditor) {
        ClassicEditor.default
            .create(document.querySelector('#ckeditor'))
            .then(editor => {
                console.log(editor);
            })
            .catch(error => {
                console.error(error);
            });
    });
}

sayHello();

$('body').append('<div style="background:purple;padding:10px;">Hello jQuery!!</div>');
$('[data-toggle="tooltip"]').tooltip();
$("#datepicker").datepicker();
if (module.hot) {
    module.hot.accept(function (err) {
        console.log(err);
    });
}

