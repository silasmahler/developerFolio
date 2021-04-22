import imagemin from 'imagemin';
import imageminJpegtran from 'imagemin-jpegtran';
import imageminPngquant from 'imagemin-pngquant';

async function imageminCall() {
    console.log("Start Imagemin");
    const files = await imagemin(['build/static/media/*.{jpg,png}'], {
        destination: 'build/static/media',
        plugins: [
            imageminJpegtran(),
            imageminPngquant({
                quality: [0.6, 0.8]
            })
        ]
    });
    console.log("files");
    console.log(files);

}

imageminCall();
export default imageminCall;



