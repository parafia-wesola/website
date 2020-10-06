import CMS from 'netlify-cms-app';
import ArticlePreview from './ArticlePreview';
import AnnoucementPreview from './AnnoucementPreview';

CMS.registerPreviewTemplate('articles', ArticlePreview);
CMS.registerPreviewTemplate('annoucements', AnnoucementPreview);
