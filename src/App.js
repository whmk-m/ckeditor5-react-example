
import React, { Component } from 'react';

import { CKEditor } from '@ckeditor/ckeditor5-react';

// NOTE: We use editor from source (not a build)!
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import AutoImage from '@ckeditor/ckeditor5-image/src/autoimage';
import AutoLink from '@ckeditor/ckeditor5-link/src/autolink';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Code from '@ckeditor/ckeditor5-basic-styles/src/code';
import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import FindAndReplace from '@ckeditor/ckeditor5-find-and-replace/src/findandreplace';
import Font from '@ckeditor/ckeditor5-font/src/font';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight';
import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline';
import HtmlEmbed from '@ckeditor/ckeditor5-html-embed/src/htmlembed';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageInsert from '@ckeditor/ckeditor5-image/src/imageinsert';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import IndentBlock from '@ckeditor/ckeditor5-indent/src/indentblock';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Link from '@ckeditor/ckeditor5-link/src/link';
import LinkImage from '@ckeditor/ckeditor5-link/src/linkimage';
import List from '@ckeditor/ckeditor5-list/src/list';
import ListProperties from '@ckeditor/ckeditor5-list/src/listproperties';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import PictureEditing from '@ckeditor/ckeditor5-image/src/pictureediting';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat';
import SourceEditing from '@ckeditor/ckeditor5-source-editing/src/sourceediting';
import SpecialCharacters from '@ckeditor/ckeditor5-special-characters/src/specialcharacters';
import SpecialCharactersEssentials from '@ckeditor/ckeditor5-special-characters/src/specialcharactersessentials';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript';
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableCaption from '@ckeditor/ckeditor5-table/src/tablecaption';
import TableCellProperties from '@ckeditor/ckeditor5-table/src/tablecellproperties';
import TableColumnResize from '@ckeditor/ckeditor5-table/src/tablecolumnresize';
import TableProperties from '@ckeditor/ckeditor5-table/src/tableproperties';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TextPartLanguage from '@ckeditor/ckeditor5-language/src/textpartlanguage';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';
import TodoList from '@ckeditor/ckeditor5-list/src/todolist';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import WordCount from '@ckeditor/ckeditor5-word-count/src/wordcount';

const editorConfiguration =  {
    language: {
        ui: 'zh-cn'
    },
    plugins: [
        Autoformat, BlockQuote, Bold, Heading, Image, ImageCaption,
        ImageStyle, ImageToolbar, Indent, Italic, Link, List, MediaEmbed,
        Paragraph, Table, TableToolbar, Alignment, AutoImage, AutoLink,
        Code, CodeBlock, Essentials,
        FindAndReplace, Font, Highlight, HorizontalLine,
        HtmlEmbed, ImageInsert, ImageResize, ImageUpload, IndentBlock,
        LinkImage, ListProperties, PasteFromOffice,
        PictureEditing, RemoveFormat, SourceEditing, SpecialCharacters,
        SpecialCharactersEssentials, Strikethrough, Subscript, Superscript,
        TableCaption, TableCellProperties, TableColumnResize,
        TableProperties, TextPartLanguage, TextTransformation, TodoList,
        Underline, WordCount
    ],
    toolbar: {
        items: [
            'undo', 'redo',
            '|',
            'findAndReplace', 'selectAll',
            '|',
            'heading',
            '|',
            'removeFormat', 'bold', 'italic', 'strikethrough', 'underline', 'code', 'subscript', 'superscript',
            '|',
            'specialCharacters', 'horizontalLine',
            '|',
            '-',
            'highlight', 'fontSize', 'fontFamily', 'fontColor', 'fontBackgroundColor',
            '|',
            'link', 'blockQuote', 'insertTable', 'uploadImage','mediaEmbed', 'codeBlock', 'htmlEmbed',
            '|',
            'bulletedList', 'numberedList', 'todoList',
            '|',
            'outdent', 'indent', 'alignment',
            '|',
            'textPartLanguage',
            '|',
            'sourceEditing'
        ],
        shouldNotGroupWhenFull: false
    },
    fontFamily: {
        supportAllValues: true
    },
    fontSize: {
        options: [ 10, 12, 14, 'default', 18, 20, 22, 24],
        supportAllValues: true
    },
    htmlEmbed: {
        showPreviews: true
    },
    image: {
        styles: [
            'alignCenter',
            'alignLeft',
            'alignRight'
        ],
        resizeOptions: [
            {
                name: 'resizeImage:original',
                label: 'Original',
                value: null
            },
            {
                name: 'resizeImage:60',
                label: '60%',
                value: '60'
            },
            {
                name: 'resizeImage:75',
                label: '75%',
                value: '75'
            }
        ],
        toolbar: [
            'imageTextAlternative', 'toggleImageCaption', '|',
            'imageStyle:inline', 'imageStyle:wrapText', 'imageStyle:breakText', 'imageStyle:side', '|',
            'resizeImage'
        ],
        insert: {
            integrations: [
                'insertImageViaUrl'
            ]
        }
    },
    list: {
        properties: {
            styles: true,
            startIndex: true,
            reversed: true
        }
    },
    link: {
        decorators: {
            addTargetToExternalLinks: true,
            defaultProtocol: 'https://',
            toggleDownloadable: {
                mode: 'manual',
                label: 'Downloadable',
                attributes: {
                    download: 'file'
                }
            }
        }
    },
    mention: {
        feeds: [
            {
                marker: '@',
                feed: [
                    '@apple', '@bears', '@brownie', '@cake', '@cake', '@candy', '@canes', '@chocolate', '@cookie', '@cotton', '@cream',
                    '@cupcake', '@danish', '@donut', '@dragée', '@fruitcake', '@gingerbread', '@gummi', '@ice', '@jelly-o',
                    '@liquorice', '@macaroon', '@marzipan', '@oat', '@pie', '@plum', '@pudding', '@sesame', '@snaps', '@soufflé',
                    '@sugar', '@sweet', '@topping', '@wafer'
                ],
                minimumCharacters: 1
            }
        ]
    },
    placeholder: 'Type or paste your content here!',
    table: {
        contentToolbar: [
            'tableColumn', 'tableRow', 'mergeTableCells', 'tableProperties', 'tableCellProperties', 'toggleTableCaption'
        ]
    }
} ;

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Using CKEditor 5 from source in React</h2>
        <CKEditor
          editor={ ClassicEditor }
          config={ editorConfiguration }
          data="<p>Hello from CKEditor 5!</p>"
          onReady={ editor => {
            // You can store the "editor" and use when it is needed.
            console.log( 'Editor is ready to use!', editor );
              window.editor = editor;
              // Prevent showing a warning notification when user is pasting a content from MS Word or Google Docs.
              window.preventPasteFromOfficeNotification = true;

              document.querySelector( '.ck.ck-editor__main' ).appendChild( editor.plugins.get( 'WordCount' ).wordCountContainer );
          } }
          onChange={ ( event, editor ) => {
            const data = editor.getData();
            console.log( { event, editor, data } );
          } }
          onBlur={ editor => {
            console.log( 'Blur.', editor );
          } }
          onFocus={ editor => {
            console.log( 'Focus.', editor );
          } }
        />
      </div>
    );
  }
}

export default App;
