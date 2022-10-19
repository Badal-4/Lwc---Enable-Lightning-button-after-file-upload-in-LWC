@track inputFiles;

fileSelected(event) {
    this.inputFiles = event.target;
}

get disableImport() {
    return !this.inputFiles || this.inputFiles.files.length === 0;
}
